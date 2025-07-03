import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";




const Howtech = () => {

    return (
        <>
            <SEO title="Howtech || Doob - React Business  Template" />
            <Layout>

                <BreadcrumbOne 
                    title="The Easiest Way To Create Website <br /> Quick Copy & Make site."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Howtech"
                />
                
                <div className="main-content">
                    
                <div className="rwt-howtech-area rn-section-gap" >
                <div className="col-lg-12">
                                <div className="lp-section lp-section-5 lp-section-bg"   name="section-5">
                                    <div className="lp-section--title color-white">
                                        <span className="num">03</span>
                                            <h1>
                                                <span className="lp-text-block">Anysoft는</span> <span className="lp-text-block">표준</span> <span className="lp-text-block">웹개발기술을</span> <span className="lp-text-block">사용하여</span><br></br>
                                                <span className="lp-text-block">빠르고</span> <span className="lp-text-block">안정적으로</span> <span className="lp-text-block">개발합니다.</span>
                                            </h1>
                                    </div>
                                    <div className="clearfix clearfix-4"></div>
                                    <div className="lp-container">
                                        <div className="lp-section-5--tools">
                                            <div className="lp-grid-row">
                                                <div className="lp-grid-6-24 lp-grid-xs-12-24">
                                                    <div className="lp-section-5--tool text-center">
                                                        <img src="./images/howtech/aphache.png" alt=""/>
                                                    </div>
                                                </div>
                                                <div className="lp-grid-6-24 lp-grid-xs-12-24">
                                                    <div className="lp-section-5--tool text-center">
                                                        <img src="./images/howtech/aws.png" alt=""/>
                                                    </div>
                                                </div>
                                                <div className="lp-grid-6-24 lp-grid-xs-12-24">
                                                    <div className="lp-section-5--tool text-center">
                                                        <img src="./images/howtech/html.png" alt=""/>
                                                    </div>
                                                </div>
                                                <div className="lp-grid-6-24 lp-grid-xs-12-24">
                                                    <div className="lp-section-5--tool text-center">
                                                        <img src="./images/howtech/nginx.jpg" alt=""/>
                                                    </div>
                                                </div>
                                                <div className="lp-grid-6-24 lp-grid-xs-12-24">
                                                    <div className="lp-section-5--tool text-center">
                                                        <img src="./images/howtech/php.png" alt=""/>
                                                    </div>
                                                </div>
                                                <div className="lp-grid-6-24 lp-grid-xs-12-24">
                                                    <div className="lp-section-5--tool text-center">
                                                        <img src="./images/howtech/python.jpg" alt=""/>
                                                    </div>
                                                </div>
                                                <div className="lp-grid-6-24 lp-grid-xs-12-24">
                                                    <div className="lp-section-5--tool text-center">
                                                        <img src="./images/howtech/react.png" alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="clearfix clearfix-2"></div>
                                        <p className="color-white text-center responsive-no-br">
                                            <span className="lp-text-block">프로젝트가</span> <span className="lp-text-block">들어올</span> <span className="lp-text-block">때</span> <span className="lp-text-block">마다</span> <span className="lp-text-block">그때그때</span> <span className="lp-text-block">만드는</span> <span className="lp-text-block">것과</span><br/>
                                            <strong><span className="lp-text-block">플랫폼</span> <span className="lp-text-block">제작</span> <span className="lp-text-block">백엔드</span> <span className="lp-text-block">엔진을</span> <span className="lp-text-block">가지고</span> <span className="lp-text-block">개발하는</span> <span className="lp-text-block">것은</span><br/>
                                                <span className="lp-text-block">개발</span> <span className="lp-text-block">속도와</span> <span className="lp-text-block">정확성과</span> <span className="lp-text-block">안정감에서</span> <span className="lp-text-block">차원이</span> <span className="lp-text-block">다를</span> <span className="lp-text-block">수</span> <span className="lp-text-block">밖에</span> <span className="lp-text-block">없습니다.</span></strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
            </Layout>
        </>
    )
}
export default Howtech;
