import React from 'react';
import DetailHeader from '../DetailHeader/DetailHeader';
import Description from '../Description/Description';
import ProgressK from '../ProgressK/ProgressK';
import RegisterButton from '../RegisterButton/RegisterButton';
import RegisterPeople from '../RegisterPeople/RegisterPeople';
import Comments from '../Comments/Comments';

const DetailInfo = () => {
    return (
        <>
        <DetailHeader></DetailHeader>
        <Description></Description>
        <ProgressK></ProgressK>
        <RegisterButton></RegisterButton>
        <RegisterPeople></RegisterPeople>
        <Comments></Comments>
        </>
    )
};

export default DetailInfo;