import React, { useContext } from 'react'
import sponserValue from '../../context/Eventcontext'
import { FileEdit, Trash2 } from 'lucide-react'
import jwtDecode from 'jwt-decode';
import jwtEncode from 'jwt-encode'
const JWT_SECRET = 'Abhiisgoodb@oy'

const Sponseritem = (props) => {
    const context = useContext(sponserValue)
    const { deletesponser } = context
    const { sponser, updatesponser,index,showAlert } = props
    const handleDeleteSponser = () => {
        const spndecodedDataArray = [];
    
        const spnData = JSON.parse(localStorage.getItem('sponserData')) || []
        spnData.forEach(token => {
            try {
                const spndecodedData = jwtDecode(token);
                spndecodedDataArray.push(spndecodedData);
            } catch (error) {
                console.error('Error decoding JWT:', error);
            }
        });
        const sponserdata = spndecodedDataArray.filter((val) => {
            return val !== sponser._id
        })
        if (sponserdata.length > 0) {
            const jwtData = sponserdata.map(data => jwtEncode(data, JWT_SECRET));
            localStorage.setItem('sponserData', JSON.stringify(jwtData));
           
        }
        else if(sponserdata.length === 0){
            localStorage.removeItem("sponserData");
        } else {    
            console.log('No matching category found');
        }

        deletesponser(sponser._id)
        showAlert('success',`${sponser.sponserName} sponser deleted successfully`)
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
                        <span><a href="event-details.html">{sponser.sponserName}</a></span>
                    </div>
                </td>
                <td>
                    <div className="attendant__speakers">
                        <div className="attendant__speakers-thumb">
                            <img src={sponser.sponserLogo} alt="image not found" />
                        </div>
                    </div>
                </td>
                <td>
                    <div className="attendant__seminer_decription">
                        <span><a href="event-details.html">{sponser.sponserDetail}</a></span>
                    </div>
                </td>
                <td>
                    <div className="attendant__action d-flex gap-2">
                        <span onClick={() => { updatesponser(sponser) }}><FileEdit absoluteStrokeWidth /></span>
                        <span onClick={handleDeleteSponser}><Trash2 absoluteStrokeWidth color='red'/></span>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default Sponseritem
