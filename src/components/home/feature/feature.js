import React, {useState, useEffect} from 'react';
import { Tabs, Row, Col, Card, Slider, Divider, Input, Pagination } from 'antd';
import image1 from '../../../assets/images/modern-design.jpg';
import image2 from '../../../assets/images/clean-design.jpg';
import image3 from '../../../assets/images/great-support.jpg';
import image4 from '../../../assets/images/easy-customise.jpg';
import image5 from '../../../assets/images/unlimited-features.jpg';
import image6 from '../../../assets/images/advanced-option.jpg';
import descLeft from '../../../assets/images/desc-detail-1.png';
import descCenter from '../../../assets/images/desc-detail-2.png';
import descRight from '../../../assets/images/desc-detail-3.png';
import imgAgent2 from '../../../assets/images/img-agent2.jpg';
import imgAgent from '../../../assets/images/img-agent.jpg';
import SearchIcon from '@material-ui/icons/Search';
import { colourOptions } from './forSale/forSale';
import AsyncSelect from 'react-select/async';
import { Icon } from '@material-ui/core';
import CoolTabs from 'react-cool-tabs';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import './feature.css';


const { TabPane } = Tabs;
const { Meta } = Card;
const { TextArea } = Input;


function AppFeature() {
  const [size,setSize]= useState('large')
  const [inputValue,setInputValue] = useState('')
  const [widthScreen, setWidthScreen] = useState(window.innerWidth)

  const handleResize = ()=>{
    setWidthScreen(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener("resize",handleResize)
  },[window.innerWidth])


  function callback(key) {
    console.log(key);
  }

  const filterColors = (inputValue) => {
    return colourOptions.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };
  
  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterColors(inputValue));
    }, 1000);
  };

  const handleInputChange = (newValue) => {
    console.log('input value', newValue)
    return inputValue;
  };

  function ForSale (key) {
    console.log(key);
    return (
      <div>
        <div className="content-box">
          <p className="proper-loc">Property Location</p>
          <AsyncSelect
              cacheOptions
              loadOptions={loadOptions}
              defaultOptions
              onInputChange={handleInputChange}
          />
          <p className="proper-loc">Property Status</p>
          <AsyncSelect
              cacheOptions
              loadOptions={loadOptions}
              defaultOptions
              onInputChange={handleInputChange}
          />
          <p className="proper-loc">Property Type</p>
          <AsyncSelect
              cacheOptions
              loadOptions={loadOptions}
              defaultOptions
              onInputChange={handleInputChange}
          />
          <p className="proper-loc">Bath Room</p>
          <AsyncSelect
              cacheOptions
              loadOptions={loadOptions}
              defaultOptions
              onInputChange={handleInputChange}
          />
          <p className="proper-loc">Bath Room</p>
          <Slider 
              defaultValue={50} 
              tooltipVisible 
              className="proper-loc-2"
          />
          <div 
            className="
              proper-loc btn-search 
              inner-content icon-left
            ">
              <SearchIcon/>
              <p className="proper-field">Search</p>
          </div>

        </div>
      </div>
    )
  }

  function ForRent (key) {
    console.log(key);
    return (
      <div>
        <p>This Content For Rent</p>
      </div>
    )
  }
  
  const dataCotent = [
    {
      "id" : "1",
      "img" : image1,
      "amount" : "176.899",
      "descTitle" : "Stunning new 4 bedroom must see villa in brawa",
      "descDetail" : "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 'de Finibus Bonorum et.",
      "amountSale" : "100",
      "amountReady" : "122",
      "amountSold" : "145"
    },
    {
      "id" : "2",
      "img" : image2,
      "amount" : "199.899",
      "descTitle" : "Brand new joglo 2 bedrooms in ubud",
      "descDetail" : "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 'de Finibus Bonorum et.",
      "amountSale" : "130",
      "amountReady" : "32",
      "amountSold" : "45"
    },
    {
      "id" : "3",
      "img" : image3,
      "amount" : "346.899",
      "descTitle" : "Best private villas hotel for investment in ubud",
      "descDetail" : "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 'de Finibus Bonorum et.",
      "amountSale" : "100",
      "amountReady" : "2",
      "amountSold" : "5"
    },
    {
      "id" : "4",
      "img" : image4,
      "amount" : "456.899",
      "descTitle" : "Brand new villa in quiet area leasehold 25 years",
      "descDetail" : "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 'de Finibus Bonorum et.",
      "amountSale" : "89",
      "amountReady" : "9",
      "amountSold" : "3"
    },
    {
      "id" : "5",
      "img" : image5,
      "amount" : "237.899",
      "descTitle" : "Stunning new 4 bedroom must see villa in brawa",
      "descDetail" : "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 'de Finibus Bonorum et.",
      "amountSale" : "100",
      "amountReady" : "122",
      "amountSold" : "145"
    },
    {
      "id" : "6",
      "img" : image1,
      "amount" : "237.899",
      "descTitle" : "Stunning new 4 bedroom must see villa in brawa",
      "descDetail" : "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 'de Finibus Bonorum et.",
      "amountSale" : "100",
      "amountReady" : "122",
      "amountSold" : "145"
    },
    {
      "id" : "7",
      "img" : image3,
      "amount" : "237.899",
      "descTitle" : "Stunning new 4 bedroom must see villa in brawa",
      "descDetail" : "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 'de Finibus Bonorum et.",
      "amountSale" : "100",
      "amountReady" : "122",
      "amountSold" : "145"
    },
    {
      "id" : "8",
      "img" : image6,
      "amount" : "111.899",
      "descTitle" : "Stunning new 4 bedroom must see villa in brawa",
      "descDetail" : "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 'de Finibus Bonorum et.",
      "amountSale" : "100",
      "amountReady" : "122",
      "amountSold" : "145"
    }
  ]

  return (
    <div id="feature" className="block featureBlock bgGray">
      <div className="container-fluid">
        {/* <p>test</p> */}
        <Row gutter={[16, 16]}>
          <Col 
            xs={{ span: 24 }} 
            sm={{ span: 24 }} 
            md={{ span: 24 }} 
            lg={{ span: 24 }} 
            xl={{ span: 16 }}
          >
            {
              dataCotent.map(item =>{
                return (
                <div data-aos={
                    widthScreen > 1200 
                    ? "zoom-in" 
                    : "none"}
                >
                  <Card
                    hoverable
                    className="card-space"
                  >
                    <Row gutter={[16, 16]}>
                      <Col 
                        xs={{span:24}} 
                        sm={{span:9}} 
                        md={{span:9}} 
                        lg={{span:9}} 
                        xl={{span:9}}
                      >
                        <Meta 
                          avatar={
                              <img 
                                alt="Modern Design" 
                                src={item.img} 
                                className="img-left"
                              />
                          }
                        />
                        <div className="amount-outer">
                          <p className="amount-inner">{`USD ${item.amount}`}</p>
                        </div>
                      </Col>
                      <Col 
                        xs={{span:24}} 
                        sm={{span:15}} 
                        md={{span:15}} 
                        lg={{span:15}} 
                        xl={{span:15}}
                      >
                        <div className="description-content-1">
                          <p className="desc-title">{item.descTitle}</p>
                          <p className="desc-detail">{item.descDetail}</p>
                          <div className="inner-content">
                            <Col 
                              md={{span:8}} 
                              className="inner-content center-fluid "
                            >
                              <img className="img-desc" src={descLeft} />
                              <p className="img-title">{`${item.amountSale} sf`}</p>
                            </Col>
                            <Col 
                              md={{span:8}} 
                              className="inner-content center-fluid"
                            >
                              <img className="img-desc" src={descCenter} />
                              <p className="img-title">{`${item.amountReady} car`}</p>
                            </Col>
                            <Col 
                              md={{span:8}} 
                              className="inner-content center-fluid"
                            >
                              <img className="img-desc" src={descRight} />
                              <p className="img-title">{`${item.amountSold} room`}</p>
                            </Col>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </div>
                )
              })
            }
            <Pagination
              total={85}
              defaultPageSize={10}
              defaultCurrent={1}
              className="pagination"
            />
          </Col>
          <Col 
            xs={{ span: 24 }} 
            sm={{ span: 24 }} 
            md={{ span: 24 }} 
            lg={{ span: 24 }} 
            xl={{ span: 8 }}
          >
              <div data-aos={
                  widthScreen > 1200 
                  ? "fade-left" 
                  : "none"}
              >
                <Card
                  hoverable
                  className="card-space"
                  style={{height: 750}}
                >
                  <CoolTabs
                    tabKey={'1'}
                    style={{ 
                      width:  '100%', 
                      height:  700, 
                      background:  'white' 
                    }}
                    activeTabStyle={{ 
                      background:  '#36D7B6', 
                      color:  'white', 
                      height: 44 
                    }}
                    unActiveTabStyle={{ 
                      background:  '#2D3E50', 
                      color:  'white', 
                      height: 44 
                    }}
                    leftContentStyle={{ 
                      background:  'white' 
                    }}
                    rightContentStyle={{ 
                      background:  'white' 
                    }}
                    leftTabTitle={'FOR SALE'}
                    rightTabTitle={'FOR RENT'}
                    leftContent={<ForSale/>}
                    rightContent={<ForRent/>}
                  />
                </Card>
              </div>
              <div data-aos={
                widthScreen > 1200 
                ? "fade-left" 
                : "none"}
              >
                <Card
                  hoverable
                  className="card-space "
                  style={{height: 300}}
                >
                  <div className="contact-agent content-box">
                    <p className="contact-text">Contact Our Agent</p>
                    <Divider className="devider"/>
                    <img className="img-agent" src={imgAgent}/>
                    <p className="contact-agent-name">John Doe</p>
                    <div className="inner-content center-fluid">
                      <p className="text-field">hello@tanjoo.com</p>
                      <p className="text-field">+62895422222</p>
                    </div>
                  </div>
                </Card>
              </div>
              <div data-aos={
                widthScreen > 1200 
                ? "fade-left" 
                : "none"}
              >
                <Card
                  hoverable
                  className="card-space "
                  style={{height: 300}}
                >
                  <div className="contact-agent content-box">
                    <p className="contact-text">Leave Message</p>
                    <Divider className="devider"/>
                    <Input className="card-space" placeholder="Name" />
                    <Input className="card-space" placeholder="Email" />
                    <TextArea 
                      className="card-space" 
                      autoSize={{ 
                        minRows: 2, 
                        maxRows: 9 
                      }} 
                    />
                  </div>
                </Card>
              </div>
          </Col>
        </Row>
        
      </div>
    </div>
  );
}

export default AppFeature;