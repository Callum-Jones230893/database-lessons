// import { useQuery } from "@tanstack/react-query";

// const UseQueryHook = <T,>({ queryName, query, initialData }: { queryName: T, query: T, initialData: T }) => {
//   const { data } = useQuery({
//     queryKey: [queryName],
//     queryFn: async () => {
//       const { data, error } = await query
//       if (error) throw new Error()

//       return data
//     },
//     initialData: initialData,
//     staleTime: 1000,
//   });
// };

// export default UseQueryHook
