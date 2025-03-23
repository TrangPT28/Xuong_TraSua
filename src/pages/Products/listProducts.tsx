import { Button, Popconfirm, Skeleton, Table, Tag } from "antd";
import { useState } from "react";
import ProductFormDrawer from "../../components/ProductDrawer";
import useList from "../../Hooks/useList";


const ProductListPage = () => {
    const { data, isLoading, error, isError } = useList({ resource: "products" });
    const [open, setOpen] = useState(false);
    const [editingProductId, setEditingProductId] = useState<number | null>(null);

    const dataSource = data?.data.map((product: any) => ({
        key: product.id,
        ...product,
    }));

    const columns = [
        {
            title: "Tên sản phẩm",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Mô tả",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Giá",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Chất liệu",
            dataIndex: "material",
            key: "material",
            render: (_: any, params2: any) => {
                return (
                    <div>
                        {params2?.material.split(",").map((item: any) => {
                            const color = item.length > 5 ? "geekblue" : "green";
                            return (
                                <Tag key={item} color={color}>
                                    {item}
                                </Tag>
                            );
                        })}
                    </div>
                );
            },
        },
        {
            dataIndex: "action",
            render: (_: any, item: any) => {
                return (
                    <div className="flex space-x-2">
                        <Button
                            type="primary"
                            onClick={() => {
                                setEditingProductId(item.id);
                                setOpen(true);
                            }}
                        >
                            Sửa
                        </Button>
                        <Button type="primary" danger>
                            <Popconfirm title="Xóa sản phẩm" onConfirm={() => {}}>
                                Xóa
                            </Popconfirm>
                        </Button>
                    </div>
                );
            },
        },
    ];

    if (isLoading) return <Skeleton active />;
    if (isError) return <div>Error: {error.message}</div>;
    if (!data) return <div>Không có sản phẩm nào</div>;
    return (
        <div>
            <div className="flex items-center justify-between  mb-3">
                <h2 className="text-xl font-semibold">Sản phẩm</h2>
                <Button
                    type="primary"
                    onClick={() => {
                        setEditingProductId(null);
                        setOpen(true);
                    }}
                >
                    Thêm sản phẩm
                </Button>
            </div>

            <Table dataSource={dataSource} columns={columns} />
            <ProductFormDrawer
                open={open}
                onClose={() => setOpen(false)}
                productId={editingProductId ?? undefined}
            />
        </div>
    );
};

export default ProductListPage;
