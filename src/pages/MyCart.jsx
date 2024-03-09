import React from 'react';
import { getCart } from '../api/firebase';
import { useQuery } from '@tanstack/react-query';
import { useAuthContext } from '../context/AuthContext';
import CartItem from '../components/CartItem';
import PriceCard from '../components/PriceCard';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';
import Button from '../components/ui/Button';
import useCart from '../hooks/useCart';



const SHIPPING = 3000;
export default function MyCart() {

    const { uid } = useAuthContext();
    // const { isLoading, data: products } = useQuery({
    //     queryKey: ['cart'],
    //     queryFn: () => getCart(uid)
    // });

    const { cartQuery: { isLoading, data: products }

    } = useCart();

    const hasProducts = products && products.length > 0;
    const totalPrice = products.reduce((prev, current) => prev + parseInt(current.price) * current.quantity, 0);

    if (isLoading) return <p>Loading...</p>
    return (
        <section className='p-8 flex flex-col'>
            <p className='text-2xl text-center font-bold pb-4 border-b border-gray-300'
            >장바구니</p>
            {hasProducts ? (
                products.map((product) =>
                    <CartItem key={product.id} product={product} uid={uid} />
                )

            ) : (
                <p>장바구니가 비어있습니다.</p>
            )}
            <div className='flex justify-between items-center mb-6 px-2 md:px-8 lg:px-16'>
                <PriceCard text='상품 총액' price={totalPrice} />
                <BsFillPlusCircleFill className='shrink-0' />
                <PriceCard text='배송액' price={SHIPPING} />
                <FaEquals className='shrink-0' />
                <PriceCard text='총가격' price={totalPrice + SHIPPING} />
            </div>
            <Button text='주문하기' />
        </section>

    );
}
