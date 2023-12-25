import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser, faSquarePlus, faStore, faBars, faHeart, faGift, faTruckFast, faBagShopping, faFire, faLanguage, faFaceSmile, faSquare, faGrid2, faCoins, faZap, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import Popup from './Popup';
//import Form from 'react-bootstrap/Form';


const Header = (props) => {
    const [show, setshow] = useState(false);

    const handleShow = () => setshow(true);
    const handleClose = () => setshow(false);
    function handleclick(a) {
        props.onData(a);
        console.log(a)
    }
    const [modalShow, setModalShow] = React.useState(false);

 
 
    return (
        <div className='header'>
            <div className='mx-w df jcsb '>
                <div className='df'>
                    <div className='pr'><button variant="primary" onClick={handleShow}> <FontAwesomeIcon icon={faBars} className="bar" /></button>
                        <Offcanvas show={show} onHide={handleClose} className="offc">
                            <Offcanvas.Header closeButton className='blu'>
                                <Offcanvas.Title className='offcl'><img src='./image/flipkart-logo.png' /></Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <div className='ofbt'>
                                    <div className=''>
                                        <button className='offbtn'> <FontAwesomeIcon icon={faCoins} className="offpd" />SuperCoin Zone</button>
                                    </div>
                                    <div className=''>
                                        <button className='offbtn'> <FontAwesomeIcon icon={faZap} className="offpd" />Flipkart Plus Zone</button>
                                    </div>
                                    <hr className='hr' />
                                    <div className=''>
                                        <button className='offbtn'> <FontAwesomeIcon icon={faBars} className="offpd" />All Categories</button>
                                    </div>
                                 
                                    <Dropdown className='offbn' style={{fontSize : '10px'}} >
                                        <Dropdown.Toggle variant="success" id="dropdown-basic" style={{padding : '2px 20px', fontSize:'13px'}}>product
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1" onClick={()=>{handleclick('all')}} >All</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" onClick={()=>{handleclick('bed')}}>Bet Sheets</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3" onClick={()=>{handleclick('shoes')}}>Shoes</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3" onClick={()=>{handleclick('toy')}}>Toys</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3" onClick={()=>{handleclick('shrit')}}>T-Shrits</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown> 
                              
                                    <div className=''>
                                        <button className='offbtn'> <FontAwesomeIcon icon={faStore} className="offpd" />Treding Stores</button>
                                    </div>
                                    <div className=''>
                                        <button className='offbtn'> <FontAwesomeIcon icon={faFaceSmile} className="offpd" />More on Flipkart</button>
                                    </div>
                                    <hr className='hr' />
                                    <div className=''>
                                        <button className='offbtn'> <FontAwesomeIcon icon={faLanguage} className="offpd" />Choose Language</button>
                                    </div>
                                    <hr className='hr' />
                                    <div className=''>
                                        <button className='offbtn'> <FontAwesomeIcon icon={faFire} className="offpd" />Offer Zone</button>
                                    </div>
                                    <div className=''>
                                        <button className='offbtn'> <FontAwesomeIcon icon={faBagShopping} className="offpd" />Sell on Flipkart</button>
                                    </div>
                                    <hr className='hr' />
                                    <div className=''>
                                        <button className='offbtn'> <FontAwesomeIcon icon={faTruckFast} className="offpd" />My Order</button>
                                    </div>
                                    <div className=''>
                                        <button className='offbtn'> <FontAwesomeIcon icon={faGift} className="offpd" />Coupons</button>
                                    </div>
                                    <div className=''>
                                        <button className='offbtn'> <FontAwesomeIcon icon={faCartShopping} className="offpd" />My Card</button>
                                    </div>
                                    <div className=''>
                                        <button className='offbtn'> <FontAwesomeIcon icon={faHeart} className="offpd" />My Wishlist</button>
                                    </div>
                                    <div className=''>
                                        <button className='offbtn'> <FontAwesomeIcon icon={faUser} className="offpd" />My Account</button>
                                    </div>
                                 
                                    <hr className='hr' />
                                    <div className=''>
                                        <button className='offbtn'>Notification Preferences</button>
                                    </div>
                                    <div className=''>
                                        <button className='offbtn'> Help Center</button>
                                    </div>
                                    <div className=''>
                                        <button className='offbtn'>Legal</button>
                                    </div>

                                                                   
                                  
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>
                    <div><img src='./image/flipkart-logo.png' alt='flip' /></div>
                </div>
                <div className='df'>
                    
                    <div className='pr'><button className=''><FontAwesomeIcon icon={faSquarePlus} style={{ "--fa-primary-color": "#0b74f4", "--fa-secondary-color": "#ffffff", }} className="plus" /></button></div>
                    <div className='pr df dn'><button><FontAwesomeIcon
                        icon={faStore} className="fnt" /></button><p className='cardpra'>Become a Seller</p></div>
                     
                    <div className='pr df countcard'><span className='count'>{props.headerCount}</span><button onClick={() => setModalShow(true)}><FontAwesomeIcon
                        icon={faCartShopping} className="fnt material-icons" /></button><p className='cardpra dn'onClick={() => setModalShow(true)}>Card</p>
                        <Popup show={modalShow} onHide={() => setModalShow(false)} plist={props.plist}/>
                        </div>
                    
                    <div><button className='log'><FontAwesomeIcon icon={faUser} className="logfnt" />Login</button></div>
                </div>
            </div>
            <div>
                <div className='input'>
                     <input placeholder='Search for products,Brands and More' /> 
                     <Dropdown className='drop'>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <FontAwesomeIcon className='mag' icon={faMagnifyingGlass} style={{ color: "#fff", paddingRight: "6px" }} />
                                       </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1" onClick={()=>{handleclick('all')}} >All</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" onClick={()=>{handleclick('bed')}}>Bet Sheets</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3" onClick={()=>{handleclick('shoes')}}>Shoes</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3" onClick={()=>{handleclick('toy')}}>Toys</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3" onClick={()=>{handleclick('shrit')}}>T-Shrits</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                </div>
             
            </div>
        </div>
    );
}

export default Header;
