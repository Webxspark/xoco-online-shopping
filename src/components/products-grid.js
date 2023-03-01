import Card from './card';
const ProductsGrid = () => {
    return (
        <>
            <div class="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-4 p-12 m-auto">
                <Card price="$100" />
                <Card price="$180" liked />
                <Card price="$60" />
                <Card price="$99" liked />
                <Card price="$80" />
                <Card price="$199" liked />
                <Card price="$60" />
                <Card price="$20" liked />
            </div>
        </>
    )
}
export default ProductsGrid;