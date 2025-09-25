import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.js';
import { axiosData } from '../utils/dataFetch.js';
import { cartItemsCheck, updateCartItemQty, cartItemsAddInfo, getTotalPrice } from '../utils/cart.js';

/**
 * CartContext를 제어하는 함수를 가진 커스텀 훅
 */
export function useCart() {
    // CartContext의 값 가져오기
    const { setCartCount, setCartList, cartList, cartCount} = useContext(CartContext);

    // 컨텍스트 객체의 값을 변경하는 함수 정의
    // 장바구니 아이템 추가
    const addCart = (cartItem) => { // <-- ProductDetail 쇼핑백 추가 이벤트 처리
        // pid, size가 동일한 경우 qty 증가, cartItems 없는 경우 새로 추가
        setCartList(cartItemsCheck(cartList, cartItem));
        setCartCount(cartCount + 1);
    }

    // 장바구니 출력 : 장바구니 아이템 <-- 이미지, 상품명, 상품가격 추가
    const showCart = () => {
        const fetch = async () => {
            const jsonData = await axiosData('/data/products.json');
            setCartList(cartItemsAddInfo(jsonData, cartList));
            // setTotalPrice(getTotalPrice(jsonData, items));
        }
        fetch();
    }

    return { addCart, showCart };
}

