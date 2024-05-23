import React from "react";
import {Link} from 'react-router-dom';


import {TbMailStar,AiOutlineShoppingCart,AiOutlineDribbble,AiOutlineBehance,AiFillLinkedin,BiLogoFacebook,AiOutlineInstagram,AiOutlineTwitter,FiMail,AiOutlineFile,MdOutlineKeyboardArrowRight,MdArrowForward} from "../assets/icons/vander";

export default function FooterBig(){
    return(
        <footer className="bg-footer">
            <div className="py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <div className="section-title">
                                <div className="d-flex align-items-center">
                                    <TbMailStar className="display-4 text-white title-dark"/>
                                    <div className="flex-1 ms-md-4 ms-3">
                                        <h4 className="fw-bold text-light title-dark mb-1">Subscribe to our newsletters</h4>
                                        <p className="text-white-50 mb-0">Sign up and receive the latest tips via email.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mt-4 mt-sm-0">
                            <div className="text-md-end ms-5 ms-sm-0">
                                <Link href="" target="_blank" className="btn btn-primary">Subscribe Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-py-60 footer-border">
                            <div className="row">
                                <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                                    <Link href="#" className="logo-footer">
                                        <img src="/gambar/logocreadoc-putih.png" width={118} height={98} alt=""/>
                                    </Link>
                                    <p className="mt-4">Start working with Creadoc that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                                        <li className="list-inline-item"><Link href="https://1.envato.market/fronter-next" target="_blank" className="rounded"><AiOutlineShoppingCart className="align-middle"/></Link></li>
                                        <li className="list-inline-item"><Link href="https://dribbble.com/shreethemes" target="_blank" className="rounded"><AiOutlineDribbble/></Link></li>
                                        <li className="list-inline-item"><Link href="https://www.behance.net/shreethemes" target="_blank" className="rounded"><AiOutlineBehance/></Link></li>
                                        <li className="list-inline-item"><Link href="http://linkedin.com/company/shreethemes" target="_blank" className="rounded"><AiFillLinkedin/></Link></li>
                                        <li className="list-inline-item"><Link href="https://www.facebook.com/shreethemes" target="_blank" className="rounded"><BiLogoFacebook/></Link></li>
                                        <li className="list-inline-item"><Link to={"https://www.instagram.com/creadoc.co/"} target="_blank" className="rounded"><AiOutlineInstagram/></Link></li>
                                        <li className="list-inline-item"><Link href="https://twitter.com/shreethemes" target="_blank" className="rounded"><AiOutlineTwitter/></Link></li>
                                        <li className="list-inline-item"><Link href="mailto:support@shreethemes.in" className="rounded"><FiMail/></Link></li>
                                        <li className="list-inline-item"><Link href="https://forms.gle/QkTueCikDGqJnbky9" target="_blank" className="rounded"><AiOutlineFile/></Link></li>
                                    </ul>
                                </div>
                                
                                <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 className="footer-head">Company</h5>
                                    <ul className="list-unstyled footer-list mt-4">
                                        <li><Link href="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> About us</Link></li>
                                        <li><Link href="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Services</Link></li>
                                        <li><Link href="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Team</Link></li>
                                        <li><Link href="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Pricing</Link></li>
                                        <li><Link href="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Project</Link></li>
                                        <li><Link href="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Careers</Link></li>
                                        <li><Link href="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Blog</Link></li>
                                        <li><Link href="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Login</Link></li>
                                    </ul>
                                </div>
                                
                                <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 className="footer-head">Usefull Links</h5>
                                    <ul className="list-unstyled footer-list mt-4">
                                        <li><Link href="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Terms of Services</Link></li>
                                        <li><Link href="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Privacy Policy</Link></li>
                                        <li><Link href="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Documentation</Link></li>
                                        <li><Link href="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Changelog</Link></li>
                                        <li><Link href="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Components</Link></li>
                                    </ul>
                                </div>
            
                                <div className="col-lg-4 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 className="footer-head">Start project with Creadoc</h5>

                                    <ul className="list-unstyled footer-list mt-4 mb-2">
                                        <li className="list-inline-item mx-1"><Link href="#" className="btn btn-soft-primary">Signin</Link></li>
                                        <li className="list-inline-item mx-1"><Link href="#" className="btn btn-primary">Signup</Link></li>
                                    </ul>
                                    <small className="d-block">Are you developer ? <Link href="#" className="text-foot fw-semibold">Learn More <MdArrowForward/></Link></small>

                                    <img src="/gambar/logocreadoc-putih.png" width={84} height={78} className="mt-4" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-py-30 footer-bar">
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <div className="text-center">
                                <p className="mb-0">© {new Date().getFullYear()} Creadoc. Design & Develop with <i className="mdi mdi-heart text-danger"></i> by <Link to={"https://github.com/Bhazyga"} target="_blank" className="text-reset">Creadoc</Link>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}