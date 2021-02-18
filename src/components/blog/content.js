import React, {useState, useEffect} from 'react';
import '../blog/content.css';
import {Row, Col, Card, Divider, Comment, Avatar, Input, Tag} from 'antd';
import { Icon, List } from 'semantic-ui-react'
import imgBlog from '../../assets/images/blog-img.png';
import imgPerson from '../../assets/images/img-agent2.jpg';
import imgPerson2 from '../../assets/images/img-agent.jpg';
import {AntDesignOutlined } from '@ant-design/icons';

const {TextArea} = Input;


function AppContent() {

  return (
    <div id="feature" className="block featureBlock bgGray">
      <div className="container-fluid square-box">
        <Row gutter={[16, 16]}>
          <Col 
            xs={{ span: 24 }} 
            sm={{ span: 24 }} 
            md={{ span: 24 }} 
            lg={{ span: 24 }} 
            xl={{ span: 16 }}
          > 
            <Card
                hoverable
                className="card-fluid space-bottom-true"
            >
                <div className="flex-column">
                    <div className="item-box">
                        <div className="card-title">
                            <p className="card-title-field">We have added new features to tonjoo property and interior</p>
                        </div>
                    </div>
                    <img src={imgBlog} className="img-blog-main"/>
                    <div className="item-box">
                        <p className="inside">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </p>
                        <div className="card-title">
                            <p className="card-title-field">We have added new features to tonjoo property and interior</p>
                        </div>
                        <p className="inside">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </p>
                        <p className="inside">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </p>
                        <p className="inside">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </p>
                        <p className="inside">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </p>
                    </div>
                </div>
            </Card>
            <Card
                hoverable
                className="card-fluid comment-field"
            >
                <div className="flex-column">
                        <div className="comment-title">
                            <p className="comment-title-field">comment</p>
                        </div>
                        <Divider className="divider"/>
                        <div className="comment-box-true">
                            <Comment
                                actions={[<p key="comment-nested-reply-to" className="reply-comment">Reply to</p>]}
                                author={<a className="person-name">Han Solo | <strong>April 25, 2021</strong></a>}
                                avatar={
                                <Avatar
                                    src={imgPerson}
                                    alt="Han Solo"
                                />
                                }
                                content={
                                <p>
                                    We supply a series of design principles, practical patterns and high quality design
                                    resources (Sketch and Axure).
                                </p>
                                }
                            >
                                <Comment
                                    actions={[<p key="comment-nested-reply-to" className="reply-comment">Reply to</p>]}
                                    author={<a className="person-name">Han Solo | <strong>April 25, 2021</strong></a>}
                                    avatar={
                                    <Avatar
                                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                        alt="Han Solo"
                                    />
                                    }
                                    content={
                                    <p>
                                        We supply a series of design principles, practical patterns and high quality design
                                        resources (Sketch and Axure).
                                    </p>
                                    }
                                >
                                    
                                </Comment>
                                <Comment
                                    actions={[<p key="comment-nested-reply-to" className="reply-comment">Reply to</p>]}
                                    author={<a className="person-name">Han Solo | <strong>April 25, 2021</strong></a>}
                                    avatar={
                                    <Avatar
                                        src={imgPerson2}
                                        alt="Han Solo"
                                    />
                                    }
                                    content={
                                    <p>
                                        We supply a series of design principles, practical patterns and high quality design
                                        resources (Sketch and Axure).
                                    </p>
                                    }
                                >
                                    
                                </Comment>
                                
                            </Comment>
                            <Comment
                                    actions={[<p key="comment-nested-reply-to" className="reply-comment">Reply to</p>]}
                                    author={<a className="person-name">Han Solo | <strong>April 25, 2021</strong></a>}
                                    avatar={
                                    <Avatar
                                        src={imgPerson2}
                                        alt="Han Solo"
                                    />
                                    }
                                    content={
                                    <p>
                                        We supply a series of design principles, practical patterns and high quality design
                                        resources (Sketch and Axure).
                                    </p>
                                    }
                                >
                                    
                             </Comment>
                             <Comment
                                    actions={[<p key="comment-nested-reply-to" className="reply-comment">Reply to</p>]}
                                    author={<a className="person-name">Han Solo | <strong>April 25, 2021</strong></a>}
                                    avatar={
                                    <Avatar
                                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                        alt="Han Solo"
                                    />
                                    }
                                    content={
                                    <p>
                                        We supply a series of design principles, practical patterns and high quality design
                                        resources (Sketch and Axure).
                                    </p>
                                    }
                                >
                                    
                                </Comment>
                        </div>
                </div>
            </Card>
            <Card
                hoverable
                className="card-fluid comment-field"
            >
                <div className="flex-column">
                        <div className="comment-box-form">
                            <Row gutter={[16,16]}>
                                <Col 
                                    xs={{span:24}}
                                    sm={{span:24}}
                                    md={{span:24}}
                                    lg={{span:12}}
                                    xl={{span:12}}
                                >
                                    <Input placeholder="Name"/>
                                   
                                </Col>
                                <Col 
                                    xs={{span:24}}
                                    sm={{span:24}}
                                    md={{span:24}}
                                    lg={{span:12}}
                                    xl={{span:12}}
                                >
                                    <Input placeholder="Your email .."/>
                                   
                                </Col>
                                <Col 
                                    xs={{span:24}}
                                    sm={{span:24}}
                                    md={{span:24}}
                                    lg={{span:24}}
                                    xl={{span:24}}
                                >
                                    <TextArea 
                                        placeholder="Your message..."
                                        rows={8}
                                    />
                                </Col>
                                <Col 
                                    xs={{span:24}}
                                    sm={{span:24}}
                                    md={{span:24}}
                                    lg={{span:24}}
                                    xl={{span:24}}
                                >
                                    <div className="submit-message">
                                        <p className="submit-btn-text">Submit Comment</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                </div>
            </Card>
          </Col>  
          <Col 
            xs={{ span: 24 }} 
            sm={{ span: 24 }} 
            md={{ span: 24 }} 
            lg={{ span: 24 }} 
            xl={{ span: 8 }}
          > 
            <Card
                hoverable
                className="card-fluid"
            >
                <div className="flex-column">
                    <div className="comment-title">
                        <p className="comment-title-field">categories</p>
                    </div>
                    <Divider className="divider"/>
                    <div className="comment-box">
                        <div className="flex-row space-top">
                            <AntDesignOutlined className="icon-list"/> 
                            <p className="list-item"> apartemen</p>
                        </div>
                        <div className="flex-row space-top">
                            <AntDesignOutlined className="icon-list"/> 
                            <p className="list-item"> flat rent</p>
                        </div>
                        <div className="flex-row space-top">
                            <AntDesignOutlined className="icon-list"/> 
                            <p className="list-item"> property listing</p>
                        </div>
                        <div className="flex-row space-top">
                            <AntDesignOutlined className="icon-list"/> 
                            <p className="list-item"> big house</p>
                        </div>
                        <div className="flex-row space-top space-bottom">
                            <AntDesignOutlined className="icon-list"/> 
                            <p className="list-item"> special property</p>
                        </div>
                    </div>
                </div>
            </Card>
            <Card
                hoverable
                className="card-fluid comment-field"
            >
                <div className="flex-column">
                    <div className="comment-title">
                        <p className="comment-title-field">popular post</p>
                    </div>
                    <Divider className="divider"/>
                    <Comment
                        className="comment-box-true"
                        // actions={[<p key="comment-nested-reply-to" className="reply-comment">Reply to</p>]}
                        author={<a className="person-name">Pavlo Picaso | <strong>March 12, 2021</strong></a>}
                        avatar={
                        <Avatar
                            src={imgPerson2}
                            alt="Han Solo"
                        />
                        }
                        content={
                        <p>
                            Best destination place to visit in 2021.
                        </p>
                        }
                    >
                        
                    </Comment>
                    <Comment
                        className="comment-box-true"
                        // actions={[<p key="comment-nested-reply-to" className="reply-comment">Reply to</p>]}
                        author={<a className="person-name">Stoner | <strong>April 25, 2021</strong></a>}
                        avatar={
                        <Avatar
                            src={imgPerson}
                            alt="Han Solo"
                        />
                        }
                        content={
                        <p>
                            The most cheapest hotel in Bali.
                        </p>
                        }
                    >
                        
                    </Comment>
                    <Comment
                        className="comment-box-true"
                        // actions={[<p key="comment-nested-reply-to" className="reply-comment">Reply to</p>]}
                        author={<a className="person-name">Patrics Wagyu | <strong>April 25, 2021</strong></a>}
                        avatar={
                        <Avatar
                            src={imgPerson2}
                            alt="Han Solo"
                        />
                        }
                        content={
                        <p>
                            Snorkling and diving in Raja Ampat.
                        </p>
                        }
                    >
                        
                    </Comment>
                    <Comment
                        className="comment-box-true"
                        // actions={[<p key="comment-nested-reply-to" className="reply-comment">Reply to</p>]}
                        author={<a className="person-name">Solomon Paveca | <strong>April 25, 2021</strong></a>}
                        avatar={
                        <Avatar
                            src={imgPerson}
                            alt="Han Solo"
                        />
                        }
                        content={
                        <p>
                            Cooking and hiking in Mount Permai.
                        </p>
                        }
                    >
                        
                    </Comment>
                </div>
            </Card>
            <Card
                hoverable
                className="card-fluid comment-field"
            >
                <div className="flex-column">
                    <div className="comment-title">
                        <p className="comment-title-field">archives</p>
                    </div>
                    <Divider className="divider"/>
                    <div className="comment-box">
                        <div className="flex-row space-top">
                            <AntDesignOutlined className="icon-list"/> 
                            <p className="list-item"> january</p>
                        </div>
                        <div className="flex-row space-top">
                            <AntDesignOutlined className="icon-list"/> 
                            <p className="list-item"> february</p>
                        </div>
                        <div className="flex-row space-top">
                            <AntDesignOutlined className="icon-list"/> 
                            <p className="list-item"> april</p>
                        </div>
                        <div className="flex-row space-top">
                            <AntDesignOutlined className="icon-list"/> 
                            <p className="list-item"> march</p>
                        </div>
                        <div className="flex-row space-top space-bottom">
                            <AntDesignOutlined className="icon-list"/> 
                            <p className="list-item"> may</p>
                        </div>
                    </div>
                </div>
            </Card>
            <Card
                hoverable
                className="card-fluid comment-field"
            >
                <div className="flex-column">
                    <div className="comment-title">
                        <p className="comment-title-field">tags</p>
                    </div>
                    <Divider className="divider"/>
                    <div className="comment-box-good">
                        <Tag color="#36D7B6">property</Tag>
                        <Tag color="#36D7B6">real estate</Tag>
                        <Tag color="#36D7B6">furniture</Tag>
                        <Tag color="#36D7B6">hot sale</Tag>
                        <Tag color="#36D7B6">property</Tag>
                        <Tag color="#36D7B6">real estate</Tag>
                        <Tag color="#36D7B6">furniture</Tag>
                        <Tag color="#36D7B6">hot sale</Tag>
                        <Tag color="#36D7B6">property</Tag>
                        <Tag color="#36D7B6">real estate</Tag>
                        <Tag color="#36D7B6">furniture</Tag>
                        <Tag color="#36D7B6">hot sale</Tag>
                        <Tag color="#36D7B6">property</Tag>
                        <Tag color="#36D7B6">real estate</Tag>
                        <Tag color="#36D7B6">furniture</Tag>
                        <Tag color="#36D7B6">hot sale</Tag>
                    </div>
                </div>
            </Card>
          </Col>  
        </Row>
        
      </div>
    </div>
  );
}

export default AppContent;