import React, { useState } from 'react';
import logo from './image/ảnh_Viber_2023-07-24_14-04-37-905.png';
import background from './image/Section.png'
import background2 from './image/Section 2.png'
import link from './image/Link.png';
import stargreen from './image/.png';
import staryealow from './image/yellow.png';
import right from './image/right.png';
import one from './image/count-one.svg.png';
import two from './image/count-two.svg.png';
import three from './image/count-three.svg.png';
import four from './image/count-four.svg.png';
import time from './image/time.png'
import time2 from './image/time2.png'

import category1 from './image/category-1.svg.png';
import category2 from './image/category-2.svg.png';
import category3 from './image/category-3.svg.png';
import category4 from './image/category-4.png';
import category5 from './image/category-5.svg.png';
import category6 from './image/category-6.svg.png';
import category7 from './image/category-7.svg.png';
import category8 from './image/category-8.svg.png';

import couser1 from './image/Link ⏵ courses-01.jpg.png'
import couser2 from './image/Link ⏵ courses-02.jpg.png'
import couser3 from './image/Link ⏵ courses-03.jpg.png'
import couser4 from './image/Link ⏵ courses-04.jpg.png'
import couser5 from './image/Link ⏵ courses-05.jpg.png'
import couser6 from './image/Link ⏵ courses-06.jpg.png'

import skil1 from './image/skil-01.png.png'

import skill1 from './image/skills-01.jpg.png'
import skill2 from './image/skills-02.jpg.png'
import skill3 from './image/skills-03.jpg.png'
import skill1b from './image/skillsb-01.jpg (1).png'
import skill2b from './image/skillsb-02.jpg (1).png'
import skill3b from './image/skillsb-03.jpg (1).png'

import linkcouser1 from './image/Link ⏵ skill-01.jpg.png'
import linkcouser2 from './image/Link ⏵ skill-02.jpg.png'
import linkcouser3 from './image/Link ⏵ skill-03.jpg.png'
import linkcouser4 from './image/Link ⏵ skill-04.jpg.png'

import user from './image/map-user.png.png'
import feature from './image/div.featured-img-1.png'

import join1 from './image/span.joing1-icon.png'
import join2 from './image/span.joing2-icon.png'
import join3 from './image/span.joing3-icon.png'
import join4 from './image/span.joing4-icon.png'

import intructor1 from './image/div.instructors1-img.png'
import intructor2 from './image/div.instructors2-img.png'
import intructor3 from './image/div.instructors3-img.png'
import intructor4 from './image/div.instructors4-img.png'
import student from './image/student.png'
import student2 from './image/student2.png'

import review from './image/reviews-img-two.png.png'

import lead1 from './image/lead-01.png.png'
import lead2 from './image/lead-02.png.png'
import lead3 from './image/lead-03.png.png'
import lead4 from './image/lead-04.png.png'
import lead5 from './image/lead-05.png.png'
import lead6 from './image/lead-06.png.png'

import blog1 from './image/Link ⏵ blog-01.jpg.png'
import blog2 from './image/Link ⏵ blog-02.jpg.png'
import blog3 from './image/Link ⏵ blog-03.jpg.png'
import day from './image/day.png'
import round from './image/round.png'
import close from './image/close.png'
import down from './image/down.png'

const DreamPage = () => {
    const [bool, setBool] = useState(false);

    return (
        // đây là cái menu của b à
        <div className=" relative bg-no-repeat bg-cover bg-center h-screen" style={{ backgroundImage: `url(${background})` }}>
            {bool && (
                <div className='absolute w-[260px]  900:hidden pb-[993px] max-390:pb-[321px] bg-[#F66962]  '>
                    <div className='flex justify-between bg-white h-[60px]'>
                        <img className='' src={logo} alt="" />
                        <button onClick={() => setBool(false)}>
                            <img className='w-[16px] h-[18px] my-auto   ' src={close} alt="" />
                        </button>
                    </div>
                    <div className='  '>
                        <div className='flex justify-between p-[20px] border-b-[1px] border-[#fff] '>
                            <p className='text-[#fff] text-[14px] font-medium leading-[150%]'>Home</p>
                            <img className='w-[13px] h-[13px]' src={down} alt="" />
                        </div>
                        <div className='flex justify-between p-[20px] border-b-[1px] border-[#fff] '>
                            <p className='text-[#fff] text-[14px] font-medium leading-[150%]'>Instructor</p>
                            <img className='w-[13px] h-[13px]' src={down} alt="" />
                        </div>
                        <div className='flex justify-between p-[20px] border-b-[1px] border-[#fff] '>
                            <p className='text-[#fff] text-[14px] font-medium leading-[150%]'>Student</p>
                            <img className='w-[13px] h-[13px]' src={down} alt="" />
                        </div>
                        <div className='flex justify-between p-[20px] border-b-[1px] border-[#fff] '>
                            <p className='text-[#fff] text-[14px] font-medium leading-[150%]'>Pages</p>
                            <img className='w-[13px] h-[13px]' src={down} alt="" />
                        </div>
                        <div className='flex justify-between p-[20px] border-b-[1px] border-[#fff] '>
                            <p className='text-[#fff] text-[14px] font-medium leading-[150%]'>Blog</p>
                            <img className='w-[13px] h-[13px]' src={down} alt="" />
                        </div>
                        <div className='flex justify-between p-[20px] border-b-[1px] border-[#fff] '>
                            <p className='text-[#fff] text-[14px] font-medium leading-[150%]'>Login / Signup</p>
                            <img className='w-[13px] h-[13px]' src={down} alt="" />
                        </div>
                    </div>
                </div>
            )}
            <div  >
                <div className='   h-[70px] mt-[20px] mx-[300px] max-1618:mx-[72px] max-1162:mx-[2px] px-[12px] flex items-center justify-center justify-between max-600:w-[100%]'>
                    <div className='flex '>
                        <button onClick={() => setBool(true)}>
                            <img className='pr-[30px] 900:hidden' src={link} alt="menu" />
                        </button>
                        <img className='h-[100px] max-600:mx-auto max-600:block' src={logo} alt="logo" />
                    </div>
                    <div className=' text-textColor text-[15px] flex flex-wrap gap-[30px] max-1040:text-[13px] max-900:hidden'>
                        <div className=' hover:text-[#F66962]'>
                            <p className='  '>Home
                                <select className='' name="" id=""></select>
                            </p>
                        </div>
                        <div className='hover:text-[#F66962]'>
                            <p className=' '>Instructor
                                <select name="" id=""></select>
                            </p>
                        </div>
                        <div className='hover:text-[#F66962]'>
                            <p className=' '>Student
                                <select name="" id=""></select>
                            </p>
                        </div>
                        <div className='hover:text-[#F66962]'>
                            <p className=' '>Pages
                                <select name="" id=""></select>
                            </p>
                        </div>
                        <div className='hover:text-[#F66962]'>
                            <p className=' '>Blog
                                <select name="" id=""></select>
                            </p>
                        </div>
                    </div>
                    <div className='flex font-bold max-600:hidden'>
                        <button className='w-[165px] h-[46px] text-[16px] max-1040:w-[120px] max-1040:h-[35px] max-1040:mr-3  text-[#FFFFFF] bg-darkblue mr-5 rounded-[5px]'>Login</button>
                        <button className='w-[165px] h-[46px] text-[16px] max-1040:w-[120px] max-1040:h-[35px]  text-[#FFFFFF] bg-green1920 max-1041:bg-orange1040 rounded-[5px]'>Sign up</button>
                    </div>
                </div>
                <div className=' mx-[300px] pt-[140px] max-1618:mx-[72px] max-1162:mx-[2px]'>
                    <div className=''>
                        <div className='font-bold text-[20px] text-green1920 max-1041:text-orange1040'>The Leader in Online Learning</div>
                        <div className='font-bold text-[48px] text-lineblue pt-[24px] '>Engaging & Accessible Online </div>
                        <div className='font-bold text-[48px] text-lineblue'>Courses For All</div>
                    </div>
                    <div className=' pt-[40px]'>
                        <div className='max-768:w-[100%]   p-[11px] h-[72px] flex  justify-between border-[1px] rounded-[10px] border-[#7A9EDD]'>
                            <div className='flex items-center justify-center'>
                                <p className='text-[14px]'>Select Category</p>
                                <select className='' ></select>
                            </div>
                            <input className=' w-[50%] ' placeholder='Search School, Online eductional centers, etc' />
                            <button className='w-[220px] max-768:w-[20%] bg-green1920 font-bold text-[#FFFFFF] rounded-[5px] max-1041:bg-orange1040'>Search</button>
                        </div>
                        <div className='pt-[25px]'>
                            <p className='text-lineblue font-[500px]'>Trusted by over 15K Users worldwide since 2022</p>
                            <div className='pt-[16px]'>
                                <p className='flex text-[#21B477] justify-start text-[15px]'>4.4
                                    <img className='pl-[5px]' src={stargreen} alt="" />
                                    <img className='pl-[5px]' src={stargreen} alt="" />
                                    <img className='pl-[5px]' src={stargreen} alt="" />
                                    <img className='pl-[5px]' src={stargreen} alt="" />
                                    <img className='pl-[5px]' src={stargreen} alt="" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-[230px]'>
                </div>
            </div>
            <div className='mx-[300px] grid grid-cols-2 max-1618:mx-[72px] max-1162:mx-[2px] max-768:grid-cols-1'>
                <div className='px-[12px] max-768:order-2 max-600:order-1'>
                    <span className='leading-[150%] text-green1920 font-semibold text-[20px] max-1041:text-orange1040'>Learn with DreamLMS</span>
                    <h1 className='leading-[120%]  text-[#4F4F4F] font-bold text-[32px] pt-[15px] pb-[50px]'>Get Trained By Experts & Professionals
                        around the World</h1>
                    <p className='pb-[50px] text-[16px] leading-[150%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam dolor fermentum
                        massa viverra congue proin. A volutpat eget ultrices velit nunc orci. Commodo quis
                        integer a felis ac vel mauris a morbi. Scelerisque nunc accumsan elementum aenean
                        nisl lacinia. Congue enim aliquet ac vitae turpis. Neque, bibendum imperdiet sed
                        ullamcorper morbi amet. Facilisi odio amet, nunc quam ut nulla purus adipiscing
                        pharetra.</p>
                    <button className='text-[16px] leading-[150%] font-bold px-[46px] py-[13px] bg-green1920 max-1041:bg-orange1040 text-[#FFF] flex h-[50px] items-center justify-center rounded-[5px]'>
                        Learn more
                        <img className='pl-[9px]' src={right} alt="" />
                    </button>
                </div>

                <div className='  max-768:order-1 max-600:order-2 max-600:grid-cols-1 px-[12px] grid grid-rows-2 grid-cols-2 gap-[24px] text-center bg-gradient-to-b from-[#FFFFFF] via-[#E0EBFF] to-[#FFFFFF] '>
                    <div className=' grid-cols-1 grid-rows-1 bg-[#fff]  h-[300px] rounded-[10px]'>
                        <div className=' my-[70px]'>
                            <img className='mx-auto my-[auto] pb-[20px]' src={one} alt="" />
                            <div className='items-center justify-center'>
                                <span className='text-[#21B477] pb-[8px] text-[28px] font-bold leading-[120%]'>10K</span>
                                <p className='text-[#5C5C5C] text-[20px] leading-[150%] font-medium'>Online Courses</p>
                            </div>
                        </div>
                    </div>
                    <div className=' grid-cols-1 grid-rows-1 bg-[#fff]  h-[300px] rounded-[10px] '>
                        <div className=''>
                            <img className='mx-auto t-0 pb-[20px]' src={two} alt="" />
                            <div>
                                <span className='text-[#FF602E] pb-[8px] text-[28px] font-bold leading-[120%]'>215+</span>
                                <p className='text-[#5C5C5C] text-[20px] leading-[150%] font-medium'>Expert Tutors</p></div>
                        </div>
                    </div>
                    <div className=' grid-cols-1 grid-rows-1 bg-[#fff]  h-[300px] rounded-[10px]'>
                        <div className='my-[70px]'>
                            <img className='mx-auto my-[auto] pb-[20px]' src={three} alt="" />
                            <div>
                                <span className='text-[#FFB500] pb-[8px] text-[28px] font-bold leading-[120%]'>10K</span>
                                <p className='text-[#5C5C5C] text-[20px] leading-[150%] font-medium'>Ceritified Courses</p></div>
                        </div>
                    </div>
                    <div className=' grid-cols-1 grid-rows-1 bg-[#fff]  h-[300px] rounded-[10px] '>
                        <div className=''>
                            <img className='mx-auto  pb-[20px]' src={four} alt="" />
                            <div>
                                <span className='text-[#392C7D] pb-[8px] text-[28px] font-bold leading-[120%]'>10K</span>
                                <p className='text-[#5C5C5C] text-[20px] leading-[150%] font-medium'>Online Students</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-[300px] py-[60px] max-1618:px-[72px] max-1162:px-[12px] bg-[#FBFCFF] bg-gradient-to-b from-[#FFFFFF] via-[#E0EBFF] to-[#FFFFFF]'>
                <div className='text-center'>
                    <span className=' text-[20px] leading-[150%] text-green1920 font-semibold max-1041:text-orange1040'>Favourite Course</span>
                    <h1 className='text-[32px] font-bold text-[#4F4F4F] leading-[120%]  pt-[15px] pb-[24px]'>Top Category</h1>
                    <p className='px-[298px] text-[16px] font-normal leading-[150%] text-[#5C5C5C] max-1041:px-[75px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum
                        gravida maecenas augue elementum et neque. Suspendisse imperdiet.
                    </p>
                </div>
                <div className='grid grid-rows-2 grid-cols-4 max-768:grid-rows-4 max-768:grid-cols-2 max-600:grid-cols-1  gap-[24px] p-[12px] bg-gradient-to-b from-[#FFFFFF] via-[#E0EBFF] to-[#FFFFFF]'>
                    <div className='grid-cols-1 grid-rows-1 p-[31px] bg-white  rounded-[10px]'>
                        <img src={category1} alt="" />
                        <div>
                            <span className='text-colortextcategory text-[20px] font-bold leading-[120%]'>Angular Development</span>
                            <p className='text-[16px] font-normal leading-[150%] text-[#22100D]'>40 Instructors</p>
                        </div>
                    </div>
                    <div className='grid-cols-1 grid-rows-1 p-[31px] bg-white  rounded-[10px]'>
                        <img src={category2} alt="" />
                        <div>
                            <span className='text-colortextcategory text-[20px] font-bold leading-[120%]'>Python Development</span>
                            <p className='text-[16px] font-normal leading-[150%] text-[#22100D]'>20 Instructors</p>
                        </div>
                    </div>
                    <div className='grid-cols-1 grid-rows-1 p-[31px] bg-white  rounded-[10px]'>
                        <img src={category3} alt="" />
                        <div>
                            <span className='text-colortextcategory text-[20px] font-bold leading-[120%]'>Node Js Development</span>
                            <p className='text-[16px] font-normal leading-[150%] text-[#22100D]'>120 Instructors</p>
                        </div>
                    </div>
                    <div className='grid-cols-1 grid-rows-1 p-[31px] bg-white  rounded-[10px]'>
                        <img src={category4} alt="" />
                        <div>
                            <span className='text-colortextcategory text-[20px] font-bold leading-[120%]'>PHP Development</span>
                            <p className='text-[16px] font-normal leading-[150%] text-[#22100D]'>40 Instructors</p>
                        </div>
                    </div>
                    <div className='grid-cols-1 grid-rows-1 p-[31px] bg-white  rounded-[10px]'>
                        <img src={category5} alt="" />
                        <div>
                            <span className='text-colortextcategory text-[20px] font-bold leading-[120%]'>Docker Development</span>
                            <p className='text-[16px] font-normal leading-[150%] text-[#22100D]'>40 Instructors</p>
                        </div>
                    </div>
                    <div className='grid-cols-1 grid-rows-1 p-[31px] bg-white  rounded-[10px]'>
                        <img src={category6} alt="" />
                        <div>
                            <span className='text-colortextcategory text-[20px] font-bold leading-[120%]'>Swift Development</span>
                            <p className='text-[16px] font-normal leading-[150%] text-[#22100D]'>40 Instructors</p>
                        </div>
                    </div>
                    <div className='grid-cols-1 grid-rows-1 p-[31px] bg-white  rounded-[10px]'>
                        <img src={category7} alt="" />
                        <div>
                            <span className='text-colortextcategory text-[20px] font-bold leading-[120%]'>Photography</span>
                            <p className='text-[16px] font-normal leading-[150%] text-[#22100D]'>40 Instructors</p>
                        </div>
                    </div>
                    <div className='grid-cols-1 grid-rows-1 p-[31px] bg-white  rounded-[10px]'>
                        <img src={category8} alt="" />
                        <div>
                            <span className='text-colortextcategory text-[20px] font-bold leading-[120%]'>Business</span>
                            <p className='text-[16px] font-normal leading-[150%] text-[#22100D]'>40 Instructors</p>
                        </div>
                    </div>
                </div>
                <button className='mx-auto text-[16px] leading-[150%] font-bold px-[46px] py-[13px] bg-green1920 max-1041:bg-orange1040 text-[#FFF] flex h-[50px] items-center justify-center rounded-[5px]'>
                    View all Category
                    <img className='pl-[9px]' src={right} alt="" />
                </button>
            </div>
            <div className='px-[300px] py-[60px] max-1618:px-[72px] max-1162:px-[12px]'>
                <div className='text-center'>
                    <span className='leading-[150%] text-green1920 font-semibold text-[20px] max-1041:text-orange1040'>What's New</span>
                    <h1 className='leading-[120%]  text-[#4F4F4F] font-bold text-[32px] pt-[15px] pb-[50px]'>Featured Courses</h1>
                    <p className='pb-[50px] text-[#5C5C5C] px-[298px] text-[16px] leading-[150%] max-1041:px-[75px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum
                        gravida maecenas augue elementum et neque. Suspendisse imperdiet.</p>
                </div>
                <div className='grid grid-rows-2 grid-cols-3 max-768:grid-rows-3 max-768:grid-cols-2 max-600:grid-cols-1 gap-[24px] p-[12px]'>
                    <div className='grid-cols-1 grid-rows-1 p-[6px]'>
                        <img className='w-[100%]' src={couser1} alt="" />
                        <p className='flex text-[#A5A5A5] justify-start text-[15px] pt-[20px]'>
                            <img className='pl-[10px]' src={staryealow} alt="" />
                            <img className='pl-[5px]' src={staryealow} alt="" />
                            <img className='pl-[5px]' src={staryealow} alt="" />
                            <img className='pl-[5px]' src={staryealow} alt="" />
                            <img className='pl-[5px] pr-[12px]' src={staryealow} alt="" />
                            203 reviews
                        </p>
                        <h1 className='text-[#324FA2] text-[20px] font-bold leading-[120%] p-[10px]'>The Complete Web Developer PHP framework Course 2.0</h1>
                        <div className='text-[14px] font-normal'>By <span className='text-[#FF0100] '>Russell T. Johnson</span></div>
                        <div className='flex justify-between pt-[33px]'>
                            <div className='w-[25%] flex text-[14px] text-[#5C5C5C] font-medium leading-[150%]'>
                                <img className='pr-[8px]' src={time} alt="" />
                                <span className=''>6hr 30min</span>
                            </div>
                            <div>
                                <h1 className='text-[20px] leading-[120%] font-bold text-[#21B477]'>$400 <span className='line-through text-[#FF602E] text-[14px] font-normal '> $99.00</span></h1>
                            </div>
                        </div>
                    </div>
                    <div className='grid-cols-1 grid-rows-1 p-[6px]'>
                        <img className='w-[100%]' src={couser2} alt="" />
                        <p className='flex text-[#A5A5A5] justify-start text-[15px] pt-[20px]'>
                            <img className='pl-[10px]' src={staryealow} alt="" />
                            <img className='pl-[5px]' src={staryealow} alt="" />
                            <img className='pl-[5px]' src={staryealow} alt="" />
                            <img className='pl-[5px]' src={staryealow} alt="" />
                            <img className='pl-[5px] pr-[12px]' src={staryealow} alt="" />
                            243 reviews
                        </p>
                        <h1 className='text-[#324FA2] text-[20px] font-bold leading-[120%] p-[10px]'>Wordpress for Beginners - Master Wordpress Quickly</h1>
                        <div className='text-[14px] font-normal'>By <span className='text-[#FF0100] '>Cristofer Nolen</span></div>
                        <div className='flex justify-between pt-[33px]'>
                            <div className='w-[25%] flex text-[14px] text-[#5C5C5C] font-medium leading-[150%]'>
                                <img className='pr-[8px]' src={time} alt="" />
                                <span className=''>6hr 30min</span>
                            </div>
                            <div>
                                <h1 className='text-[20px] leading-[120%] font-bold text-[#21B477]'>$300 <span className='line-through text-[#FF602E] text-[14px] font-normal '> $99.00</span></h1>
                            </div>
                        </div>

                    </div>
                    <div className='grid-cols-1 grid-rows-1 p-[6px]'>
                        <img className='w-[100%]' src={couser3} alt="" />
                        <p className='flex text-[#A5A5A5] justify-start text-[15px] pt-[20px]'>
                            <img className='pl-[10px]' src={staryealow} alt="" />
                            <img className='pl-[5px]' src={staryealow} alt="" />
                            <img className='pl-[5px]' src={staryealow} alt="" />
                            <img className='pl-[5px]' src={staryealow} alt="" />
                            <img className='pl-[5px] pr-[12px]' src={staryealow} alt="" />
                            243 reviews
                        </p>
                        <h1 className='text-[#324FA2] text-[20px] font-bold leading-[120%] p-[10px]'>Learn Angular Fundamentals From beginning to advance lavel</h1>
                        <div className='text-[14px] font-normal'>By <span className='text-[#FF0100] '>Cristofer Nolen</span></div>
                        <div className='flex justify-between pt-[33px]'>
                            <div className='flex text-[14px] text-[#5C5C5C] font-medium leading-[150%]'>
                                <img className='pr-[8px]' src={time} alt="" />
                                <span className=''>6hr 30min</span>
                            </div>
                            <div>
                                <h1 className='text-[20px] leading-[120%] font-bold text-[#21B477]'>$300 <span className='line-through text-[#FF602E] text-[14px] font-normal '> $99.00</span></h1>
                            </div>
                        </div>
                    </div>
                    <div className='grid-cols-1 grid-rows-1 p-[6px]'>
                        <img className='w-[100%]' src={couser4} alt="" />
                        <p className='flex text-[#A5A5A5] justify-start text-[15px] pt-[20px]'>
                            <img className='pl-[10px]' src={staryealow} alt="" />
                            <img className='pl-[5px]' src={staryealow} alt="" />
                            <img className='pl-[5px]' src={staryealow} alt="" />
                            <img className='pl-[5px]' src={staryealow} alt="" />
                            <img className='pl-[5px] pr-[12px]' src={staryealow} alt="" />
                            243 reviews
                        </p>
                        <h1 className='text-[#324FA2] text-[20px] font-bold leading-[120%] p-[10px]'>Build Responsive Real World Websites with HTML5 and CSS3</h1>
                        <div className='text-[14px] font-normal'>By <span className='text-[#FF0100] '>Cristofer Nolen</span></div>
                        <div className='flex justify-between pt-[33px]'>
                            <div className='w-[25%] flex text-[14px] text-[#5C5C5C] font-medium leading-[150%]'>
                                <img className='pr-[8px]' src={time} alt="" />
                                <span className=''>6hr 30min</span>
                            </div>
                            <div>
                                <h1 className='text-[20px] leading-[120%] font-bold text-[#21B477]'>$300 <span className='line-through text-[#FF602E] text-[14px] font-normal '> $99.00</span></h1>
                            </div>
                        </div>
                    </div>
                    <div className='grid-cols-1 grid-rows-1 p-[6px]'>
                        <img className='w-[100%]' src={couser5} alt="" />
                        <p className='flex text-[#A5A5A5] justify-start text-[15px] pt-[20px]'>
                            <img className='pl-[10px]' src={staryealow} alt="" />
                            <img className='pl-[5px]' src={staryealow} alt="" />
                            <img className='pl-[5px]' src={staryealow} alt="" />
                            <img className='pl-[5px]' src={staryealow} alt="" />
                            <img className='pl-[5px] pr-[12px]' src={staryealow} alt="" />
                            243 reviews
                        </p>
                        <h1 className='text-[#324FA2] text-[20px] font-bold leading-[120%] p-[10px]'>C# Developers Double Your Coding Speed with Visual Studio</h1>
                        <div className='text-[14px] font-normal'>By <span className='text-[#FF0100] '>Cristofer Nolen</span></div>
                        <div className='flex justify-between pt-[33px]'>
                            <div className='w-[25%] flex text-[14px] text-[#5C5C5C] font-medium leading-[150%]'>
                                <img className='pr-[8px]' src={time} alt="" />
                                <span className=''>6hr 30min</span>
                            </div>
                            <div>
                                <h1 className='text-[20px] leading-[120%] font-bold text-[#21B477]'>$300 <span className='line-through text-[#FF602E] text-[14px] font-normal '> $99.00</span></h1>
                            </div>
                        </div>
                    </div>
                    <div className='grid-cols-1 grid-rows-1 p-[6px]'>
                        <img className='w-[100%]' src={couser6} alt="" />
                        <p className='flex text-[#A5A5A5] justify-start text-[15px] pt-[20px]'>
                            <img className='pl-[10px]' src={staryealow} alt="" />
                            <img className='pl-[5px]' src={staryealow} alt="" />
                            <img className='pl-[5px]' src={staryealow} alt="" />
                            <img className='pl-[5px]' src={staryealow} alt="" />
                            <img className='pl-[5px] pr-[12px]' src={staryealow} alt="" />
                            243 reviews
                        </p>
                        <h1 className='text-[#324FA2] text-[20px] font-bold leading-[120%] p-[10px]'>Information About UI/UX Design Degree</h1>
                        <div className='text-[14px] font-normal'>By <span className='text-[#FF0100] '>Cristofer Nolen</span></div>
                        <div className='flex justify-between pt-[33px]'>
                            <div className='w-[25%] flex text-[14px] text-[#5C5C5C] font-medium leading-[150%]'>
                                <img className='pr-[8px]' src={time} alt="" />
                                <span className=''>6hr 30min</span>
                            </div>
                            <div>
                                <h1 className='text-[20px] leading-[120%] font-bold text-[#21B477]'>$300 <span className='line-through text-[#FF602E] text-[14px] font-normal '> $99.00</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='mt-[50px] mx-auto text-[16px] leading-[150%] font-bold px-[46px] py-[13px] bg-green1920 max-1041:bg-orange1040 text-[#FFF] flex h-[50px] items-center justify-center rounded-[5px]'>
                    View all Courses
                    <img className='pl-[9px]' src={right} alt="" />
                </button>
            </div>
            <div className='px-[300px] py-[60px] max-1618:px-[72px] max-1162:px-[12px]'>
                <div className='pt-[80px] grid grid-cols-2 max-768:grid-cols-1'>
                    <div><img className='mx-[75px] max-1040:m-0 max-768:mx-auto ' src={skil1} alt="" /></div>
                    <div className='my-auto p-[12px]'>
                        <span className=' text-[20px] leading-[150%] text-green1920 font-semibold max-1041:text-orange1040'>Growup Your Skill</span>
                        <h1 className='text-[32px] font-bold text-[#324FA2] leading-[120%]  pt-[15px] pb-[24px]'>Learn Anything you want today</h1>
                        <p className=' text-[16px] font-normal leading-[150%] text-[#5C5C5C]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam dolor fermentum
                            massa viverra congue proin. A volutpat eget ultrices velit nunc orci. Commodo quis
                            integer a felis ac vel mauris a morbi. Scelerisque nunc accumsan elementum aenean
                            nisl lacinia. Congue enim aliquet ac vitae turpis. Neque, bibendum imperdiet sed
                            ullamcorper morbi amet. Facilisi odio amet, nunc quam ut nulla purus adipiscing
                            pharetra.
                        </p>
                        <button className='mt-[50px]  text-[16px] leading-[150%] font-bold px-[46px] py-[13px] bg-green1920 max-1041:bg-orange1040 text-[#FFF] flex h-[50px] items-center justify-center rounded-[5px]'>
                            Join Today
                            <img className='pl-[9px]' src={right} alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className='px-[300px] py-[60px] max-1618:px-[72px] max-1162:px-[12px]'>
                <div className='text-center'>
                    <span className='leading-[150%] text-green1920 font-semibold text-[20px] max-1041:text-orange1040'>What's New</span>
                    <h1 className='leading-[120%]  text-[#4F4F4F] font-bold text-[32px] pt-[15px] pb-[50px]'>Master the skills to drive your career</h1>
                    <p className='pb-[50px] px-[298px] text-[#5C5C5C] text-[16px] leading-[150%] max-1041:px-[75px]'>Get certified, master modern tech skills, and level up your career — whether you’re starting
                        out or a seasoned pro. 95% of eLearning learners report our hands-on content directly
                        helped their careers.</p>
                </div>
                <div>
                    <div className='grid grid-cols-2 pt-[50px] max-900:grid-cols-1 '>
                        <div className='my-auto text-right pr-[90px] max-900:pr-0 max-900:text-center'>
                            <h1 className='text-[#5C5C5C] text-[36px] font-bold leading-[120%] max-900:text-[24px]'>Award Winning Course Management</h1>
                            <p className='text-[16px] max-900:text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam dolor
                                fermentum massa viverra congue proin. A volutpat eget ultrices
                                velit nunc orci. Commodo quis integer a felis ac vel mauris a morbi.
                                Scelerisque nunc accumsan elementum aenean nisl lacinia. Congue
                                enim aliquet ac vitae turpis. Neque, bibendum imperdiet sed
                                ullamcorper morbi amet. Facilisi odio amet, nunc quam ut nulla
                                purus adipiscing pharetra.</p>
                        </div>
                        <div>
                            <img className='max-900:text-[24px] max-900:mx-auto max-900:hidden' src={skill1} alt="" />
                            <img className='max-900:text-[24px] max-900:mx-auto 900:hidden' src={skill1b} alt="" />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 pt-[50px] max-900:grid-cols-1'>
                        <div className='max-900:order-2'>
                            <img className='max-900:mx-auto max-900:hidden' src={skill2} alt="" />
                            <img className='max-900:mx-auto 900:hidden' src={skill2b} alt="" />
                        </div>
                        <div className='my-auto text-left px-[55px] max-900:order-1 max-900:text-center '>
                            <h1 className='text-[#5C5C5C] text-[36px] font-bold leading-[120%] max-900:text-[24px] '>Award Winning Course
                                Management</h1>
                            <p className='text-[16px] max-900:text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                                dolor fermentum massa viverra congue proin. A volutpat eget
                                ultrices velit nunc orci. Commodo quis integer a felis ac vel
                                mauris a morbi. Scelerisque nunc accumsan elementum aenean
                                nisl lacinia. Congue enim aliquet ac vitae turpis. Neque,
                                bibendum imperdiet sed ullamcorper morbi amet. Facilisi odio
                                amet, nunc quam ut nulla purus adipiscing pharetra.</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 pt-[50px] max-900:grid-cols-1 max-900:text-center'>
                        <div className='my-auto text-right pr-[90px] max-900:pr-0 '>
                            <h1 className='text-[#5C5C5C] text-[36px] max-900:text-[24px] max-900:text-center font-bold leading-[120%]'>Certification for solid
                                development of your Carrer</h1>
                            <p className='text-[16px] max-900:text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam dolor
                                fermentum massa viverra congue proin. A volutpat eget ultrices
                                velit nunc orci. Commodo quis integer a felis ac vel mauris a morbi.
                                Scelerisque nunc accumsan elementum aenean nisl lacinia. Congue
                                enim aliquet ac vitae turpis. Neque, bibendum imperdiet sed
                                ullamcorper morbi amet. Facilisi odio amet, nunc quam ut nulla
                                purus adipiscing pharetra.</p>
                        </div>
                        <div>
                            <img className='max-900:mx-auto max-900:hidden' src={skill3} alt="" />
                            <img className='max-900:mx-auto 900:hidden' src={skill3b} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-[300px] py-[120px] mx-auto max-1618:px-[72px] max-1162:px-[12px]'>
                <img className='mx-auto' src={user} alt="" />
                <div className=' mx-auto text-center pt-[50px]'>
                    <h1 className='text-[32px] font-bold leading-[120%] text-[#4F4F4F] '>Join over <span className='text-[#1E7115] max-1041:text-orange1040'>5 Million</span> Students</h1>
                    <p className='pb-[50px] px-[298px] text-[#5C5C5C] text-[16px] leading-[150%] max-1041:px-[75px]'>Get certified, master modern tech skills, and level up your career — whether you’re starting
                        out or a seasoned pro. 95% of eLearning learners report our hands-on content directly
                        helped their careers.</p>
                    <div className='flex justify-between px-[12px] pt-[50px] max-768:grid max-768:grid-cols-2 max-460:grid-cols-1 max-768:grid-rows-2 '>
                        <div className='max-460:pt-[20px]'>
                            <p className='text-[24px] font-medium leading-[120%] text-orange1040'>253,085</p>
                            <p className='text-[20px] text-[#5C5C5C] leading-[120%] uppercase '>Students Enrolled</p>
                        </div>
                        <div className='max-460:pt-[20px]'>
                            <p className='text-[24px] font-medium leading-[120%] text-[#0DD3A3]'>1,205</p>
                            <p className='text-[20px] text-[#5C5C5C] leading-[120%] uppercase '>Total Courses</p>
                        </div>
                        <div className='max-460:pt-[20px]'>
                            <p className='text-[24px] font-medium leading-[120%] text-[#392C7D]'>253,085</p>
                            <p className='text-[20px] text-[#5C5C5C] leading-[120%] uppercase '>Students Worldwide</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='px-[300px] py-[60px] max-1618:px-[72px] max-1162:px-[12px]'>
                <div className='text-center'>
                    <span className='leading-[150%] text-green1920 font-semibold text-[20px] max-1041:text-orange1040'>New Courses</span>
                    <h1 className='leading-[120%]  text-[#4F4F4F] font-bold text-[32px] pt-[15px] pb-[50px]'>Trending Courses</h1>
                    <p className='pb-[50px] text-[#5C5C5C] px-[298px] text-[16px] leading-[150%] max-1041:px-[75px] max-600:px-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum
                        gravida maecenas augue elementum et neque. Suspendisse imperdiet.</p>
                </div>
                <div className='pt-[50px] grid grid-rows-2 grid-cols-2 gap-[24px] p-[24px] max-900:grid-cols-1 '>
                    <div className='flex max-900:flex-none max-460:grid max-460:grid-rows-2 '>
                        <img className='max-460:mx-auto' src={linkcouser1} alt="" />
                        <div className='px-[20px]'>
                            <p className='flex text-[#A5A5A5] justify-start text-[15px] pt-[20px]'>
                                <img className='' src={staryealow} alt="" />
                                <img className='pl-[5px]' src={staryealow} alt="" />
                                <img className='pl-[5px]' src={staryealow} alt="" />
                                <img className='pl-[5px]' src={staryealow} alt="" />
                                <img className='pl-[5px] pr-[12px]' src={staryealow} alt="" />
                                243 reviews
                            </p>
                            <h1 className='text-[#324FA2] text-[20px] font-bold leading-[120%] pt-[15px] pb-[10px]'>Wordpress for Beginners - Master Wordpress Quickly</h1>
                            <div className='max-460:hidden w-[25%] flex text-[14px] text-[#22100D] font-medium leading-[150%]'>
                                <img className='pr-[8px]' src={time2} alt="" />
                                <span className=''>6hr 30min</span>
                            </div>
                            <div className='flex justify-between pt-[36px]'>
                                <span className='line-through text-[#FF602E] text-[14px] font-normal '>Cristofer Nolen</span>
                                <h1 className='text-[20px] leading-[120%] font-bold text-[#21B477]'>$300 </h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex max-900:flex-none max-460:grid max-460:grid-rows-2 '>
                        <img className='max-460:mx-auto' src={linkcouser2} alt="" />
                        <div className='px-[20px]'>
                            <p className='flex text-[#A5A5A5] justify-start text-[15px] pt-[20px]'>
                                <img className='' src={staryealow} alt="" />
                                <img className='pl-[5px]' src={staryealow} alt="" />
                                <img className='pl-[5px]' src={staryealow} alt="" />
                                <img className='pl-[5px]' src={staryealow} alt="" />
                                <img className='pl-[5px] pr-[12px]' src={staryealow} alt="" />
                                243 reviews
                            </p>
                            <h1 className='text-[#324FA2] text-[20px] font-bold leading-[120%] pt-[15px] pb-[10px]'>C# Developers Double Your Coding Speed with Visual Studio</h1>
                            <div className='max-460:hidden w-[25%] flex text-[14px] text-[#22100D] font-medium leading-[150%]'>
                                <img className='pr-[8px]' src={time2} alt="" />
                                <span className=''>6hr 30min</span>
                            </div>
                            <div className='flex justify-between pt-[36px]'>
                                <span className='line-through text-[#FF602E] text-[14px] font-normal '>Cristofer Nolen</span>
                                <h1 className='text-[20px] leading-[120%] font-bold text-[#21B477]'>$300 </h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex max-900:flex-none max-460:grid max-460:grid-rows-2  '>
                        <img className='max-460:mx-auto' src={linkcouser3} alt="" />
                        <div className='px-[20px]'>
                            <p className='flex text-[#A5A5A5] justify-start text-[15px] pt-[20px]'>
                                <img className='' src={staryealow} alt="" />
                                <img className='pl-[5px]' src={staryealow} alt="" />
                                <img className='pl-[5px]' src={staryealow} alt="" />
                                <img className='pl-[5px]' src={staryealow} alt="" />
                                <img className='pl-[5px] pr-[12px]' src={staryealow} alt="" />
                                243 reviews
                            </p>
                            <h1 className='text-[#324FA2] text-[20px] font-bold leading-[120%] pt-[15px] pb-[10px]'>Learn Angular Fundamentals From beginning to advance lavel</h1>
                            <div className='max-460:hidden w-[25%] flex text-[14px] text-[#22100D] font-medium leading-[150%]'>
                                <img className='pr-[8px]' src={time2} alt="" />
                                <span className=''>6hr 30min</span>
                            </div>
                            <div className='flex justify-between pt-[36px]'>
                                <span className='line-through text-[#FF602E] text-[14px] font-normal '>Cristofer Nolen</span>
                                <h1 className='text-[20px] leading-[120%] font-bold text-[#21B477]'>$300 </h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex max-900:flex-none max-460:grid max-460:grid-rows-2  '>
                        <img className='max-460:mx-auto' src={linkcouser4} alt="" />
                        <div className='px-[20px]'>
                            <p className='flex text-[#A5A5A5] justify-start text-[15px] pt-[20px]'>
                                <img className='' src={staryealow} alt="" />
                                <img className='pl-[5px]' src={staryealow} alt="" />
                                <img className='pl-[5px]' src={staryealow} alt="" />
                                <img className='pl-[5px]' src={staryealow} alt="" />
                                <img className='pl-[5px] pr-[12px]' src={staryealow} alt="" />
                                243 reviews
                            </p>
                            <h1 className='text-[#324FA2] text-[20px] font-bold leading-[120%] pt-[15px] pb-[10px]'>Build Responsive Real World Websites with HTML5 and CSS3</h1>
                            <div className='max-460:hidden w-[25%] flex text-[14px] text-[#22100D] font-medium leading-[150%]'>
                                <img className='pr-[8px]' src={time2} alt="" />
                                <span className=''>6hr 30min</span>
                            </div>
                            <div className='flex justify-between pt-[36px]'>
                                <span className='line-through text-[#FF602E] text-[14px] font-normal '>Cristofer Nolen</span>
                                <h1 className='text-[20px] leading-[120%] font-bold text-[#21B477]'>$300 </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='mx-auto mt-[50px]  text-[16px] leading-[150%] font-bold px-[46px] py-[13px] bg-green1920 max-1041:bg-orange1040 text-[#FFF] flex h-[50px] items-center justify-center rounded-[5px]'>
                    View all Courses
                    <img className='pl-[9px]' src={right} alt="" />
                </button>
            </div>
            <div className='px-[300px] py-[60px] max-1618:px-[72px] max-1162:px-[12px] grid grid-cols-2 max-1040:grid-cols-1 gap-[24px]'>
                <img className='h-[100%] max-1040:mx-auto rounded-[10px]' src={feature} alt="" />
                <div className='p-[20px]'>
                    <h1 className='text-[#5C5C5C] text-[32px] font-bold leading-[120%]'>Want to share your knowledge?</h1>
                    <h1 className='text-[#5C5C5C] text-[32px] font-bold leading-[120%]'>Join us a Mentor</h1>
                    <p className='pt-[25px] text-[#292929] text-[16px] font-normal leading-[150%]'>High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.</p>
                    <div className='flex pt-[25px]'>
                        <img className='w-[70px] h-[70px] rounded-[10px]' src={join1} alt="" />
                        <div className=' pl-[20px]'>
                            <h4 className='text-[#5C5C5C] text-[16px] font-bold leading-[120%]'>Stay motivated with engaging instructors</h4>
                            <p className='text-[#292929] text-[14px] font-normal leading-[150%]'>High-definition video is video of higher resolution and quality than standard-definition.</p>
                            <p className='text-[#292929] text-[14px] font-normal leading-[150%]'>While there is no standardized meaning for high-definition, generally any video.</p>
                        </div>
                    </div>
                    <div className='flex pt-[25px]'>
                        <img className='w-[70px] h-[70px]' src={join2} alt="" />
                        <div className=' pl-[20px]'>
                            <h4 className='text-[#5C5C5C] text-[16px] font-bold leading-[120%]'>Keep up with in the latest in cloud</h4>
                            <p className='text-[#292929] text-[14px] font-normal leading-[150%]'>High-definition video is video of higher resolution and quality than standard-definition.</p>
                            <p className='text-[#292929] text-[14px] font-normal leading-[150%]'>While there is no standardized meaning for high-definition, generally any video.</p>
                        </div>
                    </div>
                    <div className='flex pt-[25px]'>
                        <img className='w-[70px] h-[70px]' src={join3} alt="" />
                        <div className=' pl-[20px]'>
                            <h4 className='text-[#5C5C5C] text-[16px] font-bold leading-[120%]'>Build skills your way, from labs to courses</h4>
                            <p className='text-[#292929] text-[14px] font-normal leading-[150%]'>High-definition video is video of higher resolution and quality than standard-definition.</p>
                            <p className='text-[#292929] text-[14px] font-normal leading-[150%]'>While there is no standardized meaning for high-definition, generally any video.</p>
                        </div>
                    </div>
                    <div className='flex pt-[25px]'>
                        <img className='w-[70px] h-[70px]' src={join4} alt="" />
                        <div className=' pl-[20px]'>
                            <h4 className='text-[#5C5C5C] text-[16px] font-bold leading-[120%]'>Get certified with 100+ certification courses</h4>
                            <p className='text-[#292929] text-[14px] font-normal leading-[150%]'>High-definition video is video of higher resolution and quality than standard-definition.</p>
                            <p className='text-[#292929] text-[14px] font-normal leading-[150%]'>While there is no standardized meaning for high-definition, generally any video.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-[300px] py-[60px] max-1618:px-[72px] max-1162:px-[12px] '>
                <div className='text-center'>
                    <span className='leading-[150%] text-green1920 font-semibold text-[20px] max-1041:text-orange1040'>New Courses</span>
                    <h1 className='leading-[120%]  text-[#4F4F4F] font-bold text-[32px] pt-[15px] pb-[50px]'>Featured Instructor</h1>
                    <p className='pb-[50px] text-[#5C5C5C] px-[298px] text-[16px] leading-[150%] max-1041:px-[75px] max-460:px-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum
                        gravida maecenas augue elementum et neque. Suspendisse imperdiet.</p>
                </div>
                <div className='grid grid-cols-4 max-900:grid-cols-2 max-900:grid-rows-2 max-600:grid-cols-1 px-[12px] gap-[24px]'>
                    <div>
                        <img className='w-[100%] rounded-[10px]' src={intructor1} alt="" />
                        <div className='px-[20px] pb-[20px]'>
                            <div className='text-center py-[20px]'>
                                <p className='text-[#22100D] text-[20px] font-semibold leading-[120%]'>Julian Adrose</p>
                                <p className='text-[#324FA2] text-[16px] font-normal leading-[150%]'>Angular Expert</p>
                            </div>
                            <div className='flex mx-auto'>
                                <p className='flex mx-auto pt-[20px] text-[#1E7115] max-1041:text-orange1040'> <img className='1041:hidden pr-[17px]' src={student2} alt="" /><img className='max-1041:hidden pr-[17px]' src={student} alt="" ></img> 50 Students</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className='w-[100%] rounded-[10px]' src={intructor2} alt="" />
                        <div className='px-[20px] pb-[20px]'>
                            <div className='text-center py-[20px]'>
                                <p className='text-[#22100D] text-[20px] font-semibold leading-[120%]'>Gallegos</p>
                                <p className='text-[#324FA2] text-[16px] font-normal leading-[150%]'>Docker</p>
                            </div>
                            <div className='flex mx-auto'>
                                <p className='flex mx-auto pt-[20px] text-[#1E7115] max-1041:text-orange1040'>  <img className='1041:hidden pr-[17px]' src={student2} alt="" /><img className='max-1041:hidden pr-[17px]' src={student} alt="" ></img> 70 Students</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className='w-[100%] rounded-[10px]' src={intructor3} alt="" />
                        <div className='px-[20px] pb-[20px]'>
                            <div className='text-center py-[20px]'>
                                <p className='text-[#22100D] text-[20px] font-semibold leading-[120%]'>Kristi</p>
                                <p className='text-[#324FA2] text-[16px] font-normal leading-[150%]'>Node Js</p>
                            </div>
                            <div className='flex mx-auto'>
                                <p className='flex mx-auto pt-[20px] text-[#1E7115] max-1041:text-orange1040'> <img className='1041:hidden pr-[17px]' src={student2} alt="" /><img className='max-1041:hidden pr-[17px]' src={student} alt="" ></img> 60 Students</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className='w-[100%] rounded-[10px]' src={intructor4} alt="" />
                        <div className='px-[20px] pb-[20px]'>
                            <div className='text-center py-[20px]'>
                                <p className='text-[#22100D] text-[20px] font-semibold leading-[120%]'>Pinero</p>
                                <p className='text-[#324FA2] text-[16px] font-normal leading-[150%]'>Python</p>
                            </div>
                            <div className='flex mx-auto'>
                                <p className='flex mx-auto pt-[20px] text-[#1E7115] max-1041:text-orange1040 '> <img className='1041:hidden pr-[17px]' src={student2} alt="" /><img className='max-1041:hidden pr-[17px]' src={student} alt="" ></img> 80 Students</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='mx-auto mt-[50px]  text-[16px] leading-[150%] font-bold px-[46px] py-[13px] bg-green1920 max-1041:bg-orange1040 text-[#FFF] flex h-[50px] items-center justify-center rounded-[5px]'>
                    View all Instructors
                    <img className='pl-[9px]' src={right} alt="" />
                </button>
            </div>
            <div className='px-[300px] py-[60px] max-1618:px-[72px] max-1162:px-[12px]'>
                <div className='text-center'>
                    <span className='leading-[150%] text-green1920 font-semibold text-[20px] max-1041:text-orange1040'>Check out these real reviews</span>
                    <h1 className='leading-[120%]  text-[#4F4F4F] font-bold text-[32px] pt-[15px] pb-[50px]'>Users-love-us Don't take it from us</h1>
                    <p className='pb-[50px] text-[#5C5C5C] px-[298px] text-[16px] leading-[150%] max-1041:px-[75px] max-460:px-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum
                        gravida maecenas augue elementum et neque. Suspendisse imperdiet.</p>
                </div>
                <div className='px-[12px] grid grid-cols-2 max-900:grid-cols-1'>
                    <img className='w-[100%] pr-[80px] max-900:mx-auto max-900:px-[90px]' src={review} alt="" />
                    <div className='max-900:text-center'>
                        <h1 className=' pb-[25px] text-[36px] text-[#292929] font-medium leading-[120%]'>Helps us to improve our productivity</h1>
                        <p className='text-[16px] text-[#5C5C5C] font-normal leading-[181.25%]'>High-definition video is video of higher resolution and quality than standard-
                            definition. While there is no standardized meaning for high-definition, generally any
                            video.High-definition video is video of higher resolution and quality than standard-
                            definition. While there is no standardized meaning for high-definition, generally any
                            video.High-definition video is video of higher resolution and quality than standard-
                            definition. While there is no standardized meaning for high-definition, generally any
                            video.High-definition video is video of higher resolution and quality than standard-
                            definition. While there is no standardized meaning for high-definition, generally any
                            video.</p>
                        <p className='pt-[15px] pb-[8px] text-[18px] text-[#292929] font-bold leading-[120%]'>William George</p>
                        <p className='text-[14px] text-[#5C5C5C] font-normal leading-[120%]'>CEO & Chairman</p>
                    </div>
                </div>
                <div className='pt-[70px] grid grid-cols-6 max-900:hidden'>
                    <img className='mx-auto' src={lead1} alt="" />
                    <img className='mx-auto' src={lead2} alt="" />
                    <img className='mx-auto' src={lead3} alt="" />
                    <img className='mx-auto' src={lead4} alt="" />
                    <img className='mx-auto' src={lead5} alt="" />
                    <img className='mx-auto' src={lead6} alt="" />
                </div>

                <div className='pt-[70px] grid grid-cols-3 grid-rows-2 max-700:hidden 900:hidden'>
                    <img className='mx-auto' src={lead1} alt="" />
                    <img className='mx-auto' src={lead2} alt="" />
                    <img className='mx-auto' src={lead3} alt="" />
                    <img className='mx-auto' src={lead4} alt="" />
                    <img className='mx-auto' src={lead5} alt="" />
                    <img className='mx-auto' src={lead6} alt="" />
                </div>

                <div className='pt-[70px] grid grid-cols-3 700:hidden 900:hidden'>
                    <img className='mx-auto' src={lead1} alt="" />
                    <img className='mx-auto' src={lead2} alt="" />
                    <img className='mx-auto' src={lead3} alt="" />

                </div>
            </div>
            <div className='px-[300px] py-[60px] max-1618:px-[72px] max-1162:px-[12px]'>
                <div className='text-center'>
                    <span className='leading-[150%] text-green1920 font-semibold text-[20px] max-1041:text-orange1040'>News & Events</span>
                    <h1 className='leading-[120%]  text-[#4F4F4F] font-bold text-[32px] pt-[15px] pb-[50px]'>Our Latest Updates</h1>
                    <p className='pb-[50px] text-[#5C5C5C] px-[298px] text-[16px] leading-[150%] max-1041:px-[75px] max-460:px-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum
                        gravida maecenas augue elementum et neque. Suspendisse imperdiet.</p>
                </div>
                <div className=' flex justify-center flex-wrap'>
                    <div className="relative p-[12px] ">
                        <div class='relative'>
                            <img class=' w-[100%] rounded-[5px]' src={blog1} alt="Your Image" />
                            <div class='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0000001B] to-[#000000B2] rounded-[5px]'></div>
                        </div>
                        <div className=" m-[20px]   absolute bottom-0 left-0  ">
                            <p className="bg-[#21B477] p-[5px] rounded-[4px] w-[90px] text-white text-[16px] font-bold leading-[150%] ">Marketing</p>
                            <p className=" pt-[10px] pb-[8px] text-white text-[22px] font-bold leading-[120%]">Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.</p>
                            <p className='flex'>
                                <img src={day} alt="" />
                                <span className='pl-[5px] text-white text-[16px] font-normal leading-[150%]'>Jun 15, 2022</span>
                            </p>
                        </div>
                    </div>
                    <div className="relative p-[12px]">
                        <div class='relative'>
                            <img class='w-[100%] rounded-[5px]' src={blog2} alt="Your Image" />
                            <div class='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0000001B] to-[#000000B2] rounded-[5px]'></div>
                        </div>
                        <div className="p-[20px] absolute bottom-0 left-0  ">
                            <p className="bg-[#21B477] p-[5px] rounded-[4px] w-[90px] text-white text-[16px] font-bold leading-[150%] ">Sales</p>
                            <p className=" pt-[10px] pb-[8px] text-white text-[22px] font-bold leading-[120%]">Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.</p>
                            <p className='flex'>
                                <img src={day} alt="" />
                                <span className='pl-[5px] text-white text-[16px] font-normal leading-[150%]'>Jun 15, 2022</span>
                            </p>
                        </div>
                    </div>
                    <div className="relative p-[12px]">
                        <div class='relative'>
                            <img class='w-[100%] rounded-[5px]' src={blog3} alt="Your Image" />
                            <div class='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0000001B] to-[#000000B2] rounded-[5px]'></div>
                        </div>
                        <div className="p-[20px] absolute bottom-0 left-0  ">
                            <p className="bg-[#21B477] p-[5px] rounded-[4px] w-[90px] text-white text-[16px] font-bold leading-[150%] ">Marketing</p>
                            <p className=" pt-[10px] pb-[8px] text-white text-[22px] font-bold leading-[120%]">Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.</p>
                            <p className='flex'>
                                <img src={day} alt="" />
                                <span className='pl-[5px] text-white text-[16px] font-normal leading-[150%]'>Jun 15, 2022</span>
                            </p>
                        </div>
                    </div>
                </div>
                <button className='mx-auto mt-[50px]  text-[16px] leading-[150%] font-bold px-[46px] py-[13px] bg-green1920 max-1041:bg-orange1040 text-[#FFF] flex h-[50px] items-center justify-center rounded-[5px]'>
                    View all Events
                    <img className='pl-[9px]' src={right} alt="" />
                </button>
            </div>
            <div className='px-[300px] py-[60px] max-1618:px-[72px] max-1162:px-[12px]'>
                <div className=' grid grid-cols-6 max-768:grid-cols-2 max-768:grid-rows-2 max-460:grid-cols-1 max-460:text-center'>
                    <div className='p-[12px] col-span-2 max-768:grid-cols-1 max-768:grid-rows-1 max-768:col-span-1  '>
                        <img className='w-[50%] max-460:mx-auto' src={logo} alt="" />
                        <p className='pl-[40px] w-[75%] max-460:pl-0 max-460:text-center max-460:w-[100%]'>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Ut consequat mauris Lorem
                            ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut consequat mauris</p>
                        <div className='flex pl-[40px] pt-[20px] max-460:justify-center max-460:pl-0'>
                            <img className=' pr-[15px]' src={round} alt="" />
                            <img className=' pr-[15px]' src={round} alt="" />
                            <img className=' pr-[15px]' src={round} alt="" />
                            <img className=' pr-[15px]' src={round} alt="" />
                        </div>
                    </div>
                    <div className='p-[12px] grid-cols-1 max-768:grid-cols-1 max-768:grid-rows-1 '>
                        <h1 className='text-[#392C7D] leading-[120%] font-bold text-[18px] pb-[26px]'>For Instructor</h1>
                        <p className='text-[#000] leading-[150%] font-medium text-[15px] pb-[19px]'>Profile</p>
                        <p className='text-[#000] leading-[150%] font-medium text-[15px] pb-[19px]'>Login</p>
                        <p className='text-[#000] leading-[150%] font-medium text-[15px] pb-[19px]'>Register</p>
                        <p className='text-[#000] leading-[150%] font-medium text-[15px] pb-[19px]'>Instructor</p>
                        <p className='text-[#000] leading-[150%] font-medium text-[15px] pb-[19px]'>Dashboard</p>
                    </div>
                    <div className='p-[12px] grid-cols-1 max-768:grid-cols-1 max-768:grid-rows-1 '>
                        <h1 className='text-[#392C7D] leading-[120%] font-bold text-[18px] pb-[26px]'>For Student</h1>
                        <p className='text-[#000] leading-[150%] font-medium text-[15px] pb-[19px]'>Profile</p>
                        <p className='text-[#000] leading-[150%] font-medium text-[15px] pb-[19px]'>Login</p>
                        <p className='text-[#000] leading-[150%] font-medium text-[15px] pb-[19px]'>Register</p>
                        <p className='text-[#000] leading-[150%] font-medium text-[15px] pb-[19px]'>Student</p>
                        <p className='text-[#000] leading-[150%] font-medium text-[15px] pb-[19px]'>Dashboard</p>
                    </div>
                    <div className='p-[12px] col-span-2 max-768:grid-cols-1 max-768:grid-rows-1 max-768:col-span-1'>
                        <h1 className='text-[#392C7D] leading-[120%] font-bold text-[18px] pb-[26px]'>Address</h1>
                        <div className='pb-[15px]'>
                            <p className='text-[#392C7D] leading-[120%] font-medium text-[16px] pb-[9px]'>Location</p>
                            <p className='text-[#4F4F4F] leading-[150%] font-medium text-[14px]'>3556 Beech Street, San Francisco, California, CA 94108</p>
                        </div>
                        <div className='pb-[15px]'>
                            <p className='text-[#392C7D] leading-[120%] font-medium text-[16px] pb-[9px]'>Email Address</p>
                            <p className='text-[#4F4F4F] leading-[150%] font-medium text-[14px]'>dreamslms@example.com</p>
                        </div>
                        <div className='pb-[15px]'>
                            <p className='text-[#392C7D] leading-[120%] font-medium text-[16px] pb-[9px]'>Phone number</p>
                            <p className='text-[#4F4F4F] leading-[150%] font-medium text-[14px]'>+19 123-456-7890</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between p-[60px] max-768:p-[12px] max-460:flex-wrap max-700:hidden '>
                    <div className='my-auto'>
                        <p className='max-460:text-center'>© 2023 DreamsLMS. All rights reserved.</p>
                    </div>
                    <div className='max-460:text-center max-460:grid max-460:grid-rows-3'>
                        <a className='px-[10px]' href="">Terms & Condition</a>
                        <a className='px-[10px] border-r-[1px] border-l-[1px] border-[#B2B1FC]' href="">Privacy Policy</a>
                        <a className='px-[10px]' href="">Contact Us</a>
                    </div>
                </div>
                <div className='text-center p-[60px] max-768:p-[12px] max-460:flex-wrap 700:hidden '>
                    <div className='my-auto'>
                        <p className='max-460:text-center'>© 2023 DreamsLMS. All rights reserved.</p>
                    </div>
                    <div className='max-460:text-center max-460:grid max-460:grid-rows-3'>
                        <a className='px-[10px]' href="">Terms & Condition</a>
                        <a className='px-[10px] border-r-[1px] border-l-[1px] border-[#B2B1FC]' href="">Privacy Policy</a>
                        <a className='px-[10px]' href="">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DreamPage;