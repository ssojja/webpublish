/**
 * 베스트 상품 컨텐츠 컴포넌트
 */
export function BestProductContent({title, sale, price, like, icon, acc}) {
    return (
        <div className="best-product-content">
            <p className="best-product-content-title">{title}</p>
            <span className="best-product-content-sale">{sale}</span>
            <span className="best-product-content-price">{price}</span>
            <span className="best-product-content-acc">누적 관객수 : {parseInt(acc).toLocaleString()} 명</span>
            { like?  
                <span className="best-product-img-like">{icon}</span> : "" }
        </div>
    );
}