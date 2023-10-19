import generes from "../../Data/generes";
export interface Genre {
    id: number,
    name: string,
    image_background: string;
    


}
const useGenres= () => ({data:generes, isLoading: false, error: null })

export default useGenres;