
type DataPagingResult = {
    totalItems: number;
    products: any;
    totalPages: number;
    currentPage: number;
};

export const getPagination = (page: number | undefined, size: number | undefined) => {
    
	const limit = size ? +size : 10;
	const offset = page ? page * limit : 0;
    
	return { limit, offset };
};


export const getPagingData = (data: any, page: number | undefined, limit: number | undefined = 10): DataPagingResult => {
    
    const { 
        count: totalItems,
        rows: products 
    } = data;
    
    
    const currentPage: number = page ? +page : 0;
    const totalPages: number = Math.ceil(totalItems / limit) - 1;
    
    
    return { totalItems, products, totalPages, currentPage };
};