import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchProduct = ({ setProduct }) => {
const [search, setSearch] = useState('');

const removeVietnameseTones = (str) => {
    str = str.replace(/[\u0300-\u036f]/g, ""); 
    str = str.replace(/đ/g, "d").replace(/Đ/g, "D"); 
    str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); 
    return str;
    };

    const handleSearch = async () => {
        if (search) {
        const ProductData = await fetchData('http://127.0.0.1:8000/api/List', api);
        const searchedProduct = ProductData.filter(
            (item) => removeVietnameseTones(item.name.toLowerCase()).includes(search)
                || removeVietnameseTones(item.category?.toLowerCase()).includes(search)
                || item.price?.toLowerCase().includes(search) 
        );
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
        setSearch('');
        setProduct(searchedProduct);
        } else {
        setProduct([]);
        }
    };
return (
    <Stack alignItems="center" mt="10px" justifyContent="center" p="10px">
    <Box position="relative" mb="10px">
        <TextField
        sx={{
            input: {
            padding: '5px 10px',  
            fontWeight: '300',
            border: 'none',
            borderRadius: '4px'
            },
            width: { lg: '300px', xs: '200px' }, 
            backgroundColor: '#fff',
            borderRadius: '10px'
        }}
        InputProps={{
            startAdornment: (
            <InputAdornment position="start">
                <SearchIcon />
            </InputAdornment>
            ),
            sx: {
            height: '30px', 
            }
        }}
        value={search}
        placeholder="Search Product"
        type="text"
        />
        <Button className="search-btn" sx={{ bgcolor: '#00B207', color: '#fff', textTransform: 'none', width: { lg: '20px', xs: '30px' }, height: '30px', position: 'absolute', fontSize: { lg: '14px', xs: '10px' } }} onClick={handleSearch}>
        Search
        </Button>
    </Box>
    </Stack>
);
};

export default SearchProduct;
