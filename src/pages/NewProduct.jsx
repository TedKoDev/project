import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { uploadImage } from '../api/uploader';
import { addNewProduct } from '../api/firebase';

export default function NewProduct() {

    const [product, setProduct] = useState({});
    const [file, setFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [success, setSuccess] = useState(null);



    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'file') {
            setFile(files && files[0]);
            return;
        }

        setProduct({ ...product, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsUploading(true);
        uploadImage(file)
            .then(url => {
                console.log('url', url)
                addNewProduct(product, url)
                    .then(() => {
                        setSuccess('성공적으로 제품이 추가되었습니다.');
                        setTimeout(() => {
                            setSuccess(null);
                        }, 3000);
                    })
            }
            )
            .finally(() => {
                setIsUploading(false);
                setSuccess(true);
            });



    }


    return (
        <section className='w-full text-center'>
            <h2 className='text-2xl font-bold my-4'>새로운 제품 등록</h2>
            {success && <p>✅{success}</p>}
            {file && <img
                className='w-96 mx-auto mb-2'
                src={URL.createObjectURL(file)} alt='preview' />}
            <form className='flex flex-col px-12' onSubmit={handleSubmit}>
                <input
                    type='file'
                    accept='image/*'
                    name='file'
                    required
                    onChange={handleChange}

                />
                <input
                    type='text'
                    name='title'
                    required
                    placeholder='제품명을 입력해주세요.'
                    value={product.title ?? ''}
                    onChange={handleChange}
                />
                <input
                    type='number'
                    name='price'
                    required
                    placeholder='가격을 입력해주세요.'
                    value={product.price ?? ''}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='description'
                    required
                    placeholder='제품 설명을 입력해주세요.'
                    value={product.description ?? ''}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='category'
                    required
                    placeholder='카테고리를 입력해주세요.'
                    value={product.category ?? ''}
                    onChange={handleChange}
                />
                <input
                    type='option'
                    name='option'
                    required
                    placeholder='옵션을 입력해주세요.'
                    value={product.option ?? ''}
                    onChange={handleChange}
                />
                <Button type='submit' text={isUploading ? '업로드... 중입니다.' : '제품 등록하기'} />
            </form>
        </section>

    );
}
