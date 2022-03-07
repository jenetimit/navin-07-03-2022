//import { ItemWrapper} from 'src/item/item.styles';

type props = {
    item: any;
    section: string;
    handleAddtoCart: (clickedItem: any,clickedSection: string) => void;
}

const DodItem: React.FC<props> = ({ item, section, handleAddtoCart }) => (

    <div className="itemWrapper" onClick={()=> handleAddtoCart(item,section)} >
        <img src={item.image.thumbnail} alt={item.name} />
        <div>
            <h3>{item.name}</h3>
        </div>
        {/* <Button onClick={() => handleAddtoCart(item)} >SELECT</Button> */}
        {/* <Button onClick={() => handleProductQuickView(item)} >Add to Cart</Button> */}
    </div>
)

export default DodItem;