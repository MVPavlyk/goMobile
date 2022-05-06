import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Layout} from './Components';
import {
    DescriptionPage,
    LocationPage,
    MapPage,
    MenuPage,
    OneRestaurantPage,
    PhotosPage,
    RestaurantListPage
} from './Pages';

function App() {
    return (
        <Routes>
            <Route path={'goMobile/'} element={<Layout/>}>
                <Route index element={<RestaurantListPage/>}/>
                <Route path={'goMobile/place/:id'} element={<OneRestaurantPage/>}>
                    <Route path={'goMobile/place/:id/description'} element={<DescriptionPage/>}/>
                    <Route path={'goMobile/place/:id/photos'} element={<PhotosPage/>}/>
                    <Route path={'goMobile/place/:id/menu'} element={<MenuPage/>}/>
                    <Route path={'goMobile/place/:id/map'} element={<MapPage/>}/>
                    <Route path={'goMobile/place/:id/location'} element={<LocationPage/>}/>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
