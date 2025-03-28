import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteOne } from "../provider/Dataprovider";

type useDelete = {
    resource: string,
}
export const useDelete = ({resource}: useDelete) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: number) => deleteOne({ resource: "products", id }),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [resource]
            })
        }
    })
}
export default useDelete