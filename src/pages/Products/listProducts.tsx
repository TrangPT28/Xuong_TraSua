import { Button, Popconfirm, Table, message } from "antd";

import { Link } from "react-router-dom";
import useList from "../../Hooks/useList";
import { useDelete } from "../../Hooks/useDelete";

const ProductList = () => {
    const { data, isLoading, isError, error} = useList({ resource: "products" });
    const [ messageApi, contextHolder ] = message.useMessage();
    const { mutate } = useDelete({resource: "product"});

    const dataSource = data?.data?.map((item: any) => ({
        key: item.id, ...item
    }));

    const columns = [
        {title: "Tên sản phẩm", dataIndex: "name", key: "name"},
        {title: "Giá", dataIndex: "price", key: "price"},
        {title: "Danh mục", dataIndex: "category", key: "category"},
        {title: "Hình ảnh", dataIndex: "image", key: "image"},
        {title: "Mô tả", dataIndex: "description", key: "description"},
        {dataIndex: "action",
        render: (_: any, item: any) => {
            return (
                <div className="flex space-x-2">
                    <Button type="primary">
                            <Link to={`/admin/products/update/${item.id}`}>Cập nhật</Link>
                        </Button>
                        <Button type="primary">
                            <Link to={`/admin/products/${item.id}`}>Chi tiết</Link>
                        </Button>

                        <Popconfirm
                            title="Bạn có chắc chắn muốn xóa không?"
                            onConfirm={() => {
                                mutate(item.id, {
                                    onSuccess: () => messageApi.success("Xóa thành công"),
                                    onError: (error: any) => console.log(error?.response?.data),
                                });
                            }}
                        >
                            <Button type="primary" danger>
                                Xóa
                            </Button>
                        </Popconfirm>
                </div>
            )

        }},   
    ];

    if (isLoading) return <div>Loading....</div>;
    if (isError) return <div>Error: {error.message}</div>;
    if (!data) return <div>Không có sản phẩm</div>;

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-semibold">Sản phẩm</h1>
                <Link type="primary" to="/admin/products/add">
                    Thêm sản phẩm
                </Link>
            </div>
            <Table dataSource={dataSource} columns={columns} />
            {contextHolder}
        </div>
    );
};

export default ProductList;