export interface Product{
    _id : string;
    productName : string;
    _type : "product";
    image? : {
        asset : {
            _ref : string;
            _type : "image";
        }
    };
    category : string;
    price : number;
    description? : string;
    slug : {
        _type: "slug";
        current: string;
    };
    inventory:number;
}