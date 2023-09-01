import React, { useContext } from 'react'
import categoryValue from '../../context/Eventcontext'
import {FileEdit,Trash2} from 'lucide-react'
// import Alert,{showAlert} from '../../components/alert/Alert'
import jwtDecode from 'jwt-decode';
import jwtEncode from 'jwt-encode'
const JWT_SECRET = 'Abhiisgoodb@oy'

const Categoryitem = (props) => {
    const {category,updateCategory,index,showAlert} = props
    const context = useContext(categoryValue)
    const {deletecategory} = context
    const handleDeleteCategory = ()=>{
        const catgdecodedDataArray = [];
        const catgData = JSON.parse(localStorage.getItem('categoryData')) || []
        catgData.forEach(token => {
          try {
            const catgdecodedData = jwtDecode(token);
            catgdecodedDataArray.push(catgdecodedData);
          } catch (error) {
            console.error('Error decoding JWT:', error);
          }
        });
        console.log(catgdecodedDataArray)
        const categorydata = catgdecodedDataArray.filter((val) => {
            return val !== category._id
          })
          if (categorydata.length > 0) {
            const jwtData = categorydata.map(data => jwtEncode(data,JWT_SECRET))
            localStorage.setItem("categoryData",JSON.stringify(jwtData))
          }
           else if(categorydata.length === 0){
            // console.log("hello")
            localStorage.removeItem("categoryData");
        } else {
            console.log('No matching category found');
          }
        const eventcatg = localStorage.getItem('categoryid')
        catgdecodedDataArray.filter((val)=>{
            if(val === eventcatg){
                localStorage.removeItem('categoryid')
            }
        })
        deletecategory(category._id)
        showAlert('success',`${category.categoryname} category deleted successfully`)
    }
    return (
        <>
            <tr>
                <td>
                    <div className="attendant__serial">
                        <span>{index+1}</span>
                    </div>
                </td>
                <td>
                    <div className="attendant__seminer">
                        <span><a href="event-details.html">{category.categoryname}</a></span>
                    </div>
                </td>
                <td>
                    <div className="attendant__seminer_decription">
                        <span><a href="event-details.html">{category.categorydescription}</a></span>
                    </div>
                </td>
                <td>
                    <div className="attendant__action d-flex gap-2">
                        <span onClick={()=>{updateCategory(category)}}><FileEdit absoluteStrokeWidth /></span>
                        <span onClick={handleDeleteCategory}><Trash2 absoluteStrokeWidth color='red' /></span>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default Categoryitem
