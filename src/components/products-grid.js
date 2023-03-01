import Card from './card';
const ProductsGrid = () => {
    return (
        <>
            <div class="grid grid-cols-4 gap-4 space-evenly mx-12 mr-auto pt-6">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}
export default ProductsGrid;