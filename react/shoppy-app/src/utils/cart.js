export function cartItemsCheck(prevItems, cartItem) {
    // 존재여부 체크
    const existItem = prevItems.find((item) => item.pid === cartItem.pid && item.size === cartItem.size);
    
    if(existItem){
        return prevItems.map((item)=> item.pid === cartItem.pid && item.size === cartItem.size ? {...item, qty:item.qty+1} : item);
    } else {
        return [...prevItems, {...cartItem}]; // 존재하지 않으면 새로운 item 추가
    }   
}