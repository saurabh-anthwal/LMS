import React from 'react';
import "./Dashboard.css";
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { FcBusinessContact } from 'react-icons/fc';
import { MdLeaderboard } from 'react-icons/md';
import { RiMessage3Line } from 'react-icons/ri';

export default function Dashboard() {
  return (
    <div className='dashboard-main'>
        <div className='main-badges'>
            <div className='earnings common-badge'> 
            <p><FaRegMoneyBillAlt/>EARNINGS</p>
            <h1>34700</h1>
            </div>
            <div className='contacts common-badge'>
            <p><FcBusinessContact/>CONTACTS</p>
            <h1>150</h1>
            </div>
            <div className='leads common-badge'>
            <p><MdLeaderboard/>LEADS</p>
            <h1>4846</h1>
            </div>
            <div className='messages common-badge'>
            <p><RiMessage3Line/>MESSAGES</p>
            <h1>150</h1>
            </div>
        </div>

        <div >
            <table className='details-table'>
                <tr>
                    <th>MAKE</th>
                    <th>MODEL</th>
                    <th>PRICE</th>
                </tr>
                    <tr>
                    <td>Toyota</td>
                    <td>selica</td>
                    <td>32550</td>
                    </tr>
                    <tr>
                    <td>Ford</td>
                    <td>Mondio</td>
                    <td>12000</td>
                    </tr>
                    <tr>
                    <td>Porce</td>
                    <td>Boxter</td>
                    <td>5425</td>
                    </tr>
            </table>
        </div>

    </div>
  )
}
