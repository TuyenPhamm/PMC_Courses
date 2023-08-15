import React, { useState, useRef } from 'react';
import {
    List, ListItem, ListItemButton, ListItemText,
    SwipeableDrawer, ListItemIcon, Box
} from '@mui/material';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {
    logo, logo2,
    background, background1, background2,
    link,
    stargreen, staryealow,
    right,
    one, two, three, four,
    time, time2,
    category1, category2, category3, category4, category5, category6, category7, category8,
    couser1, couser2, couser3, couser4, couser5, couser6,
    skil1, skill1, skill2, skill3,
    skill1b, skill2b, skill3b,
    linkcouser1, linkcouser2, linkcouser3, linkcouser4,
    user, feature,
    join1, join2, join3, join4,
    intructor1, intructor2, intructor3, intructor4,
    student, student2,
    review,
    lead1, lead2, lead3, lead4, lead5, lead6,
    day,
    round,
    close,
    down,
    blog1, blog2, blog3
} from './image.jsx'
import makeStyles from "@material-ui/styles/makeStyles";
type Anchor = " " | 'right';
const useStyles = makeStyles({
    popOverRoot: {
      pointerEvents: "none"
    }
  });

const DreamPage = () => {
    const [state, setState] = React.useState<{ [key in Anchor]: boolean }>({
        " ": false,
        "right": false
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }
                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: 260 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <div className=' '>
                    <div className='grid grid-cols-2 bg-white '>
                        <img className='' src={logo2} alt="" />
                        <button>
                            <img className='w-[16px] h-[18px] my-auto ml-[60px] ' src={close} alt="" />
                        </button>
                    </div>
                    <div className='pb-[993px] bg-[#F66962] pl-[20px]'>
                        {['Home ', 'Instructor', 'Student', 'Page', 'Blog', 'Login / Signup'].map((text, index) => (
                            <ListItem className='text-[#fff] bg-[#F66962] ' key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemText className='text-[15px] font-medium leading-[70px]' primary={text} />
                                    <ListItemIcon>
                                        <img src={down} alt="" />
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </div>
                </div>
            </List>
        </Box>
    );

    const theme = createTheme({});
    const [menu1AnchorEl, setMenu1AnchorEl] = React.useState(null);
    const [menu2AnchorEl, setMenu2AnchorEl] = React.useState(null);
    const [menu3AnchorEl, setMenu3AnchorEl] = React.useState(null);
    const [menu4AnchorEl, setMenu4AnchorEl] = React.useState(null);
    const [menu5AnchorEl, setMenu5AnchorEl] = React.useState(null);


    let currentlyHovering = false;
    const styles = useStyles();

    function handleClickMenu1(event: any) {
        if (menu1AnchorEl !== event.currentTarget) {
            setMenu1AnchorEl(event.currentTarget);
        }
    }
    function handleClickMenu2(event: any) {
        if (menu2AnchorEl !== event.currentTarget) {
            setMenu2AnchorEl(event.currentTarget);
        }
    }
    function handleClickMenu3(event: any) {
        if (menu3AnchorEl !== event.currentTarget) {
            setMenu3AnchorEl(event.currentTarget);
        }
    }
    function handleClickMenu4(event: any) {
        if (menu4AnchorEl !== event.currentTarget) {
            setMenu4AnchorEl(event.currentTarget);
        }
    }
    function handleClickMenu5(event: any) {
        if (menu5AnchorEl !== event.currentTarget) {
            setMenu5AnchorEl(event.currentTarget);
        }
    }

    function handleHover() {
        currentlyHovering = true;
    }


    function handleCloseMenu1() {
        setMenu1AnchorEl(null);
    }
    function handleCloseMenu2() {
        setMenu2AnchorEl(null);
    }
    function handleCloseMenu3() {
        setMenu3AnchorEl(null);
    }
    function handleCloseMenu4() {
        setMenu4AnchorEl(null);
    }
    function handleCloseMenu5() {
        setMenu5AnchorEl(null);
    }

    function handleCloseHoverMenu1() {
        currentlyHovering = false;
        setTimeout(() => {
            if (!currentlyHovering) {
                handleCloseMenu1();
            }
        }, 0);
    }
    function handleCloseHoverMenu2() {
        currentlyHovering = false;
        setTimeout(() => {
            if (!currentlyHovering) {
                handleCloseMenu2();
            }
        }, 0);
    }
    function handleCloseHoverMenu3() {
        currentlyHovering = false;
        setTimeout(() => {
            if (!currentlyHovering) {
                handleCloseMenu3();
            }
        }, 0);
    }
    function handleCloseHoverMenu4() {
        currentlyHovering = false;
        setTimeout(() => {
            if (!currentlyHovering) {
                handleCloseMenu4();
            }
        }, 0);
    }
    function handleCloseHoverMenu5() {
        currentlyHovering = false;
        setTimeout(() => {
            if (!currentlyHovering) {
                handleCloseMenu5();
            }
        }, 0);
    }

    const [age, setAge] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as string);
    };



    return (
        <div className=' relative'>
            <div className=" relative bg-no-repeat bg-cover bg-center h-screen w-full" style={{ backgroundImage: `url(${background})` }}>
                <div className='max-1040:hidden  absolute right-0   z-0 '>
                    <img className='' src={background1} alt="" />
                </div>
                <div className='max-1040:hidden absolute mt-[550px] -left-[80px]  z-0'>
                    <img src={background2} alt="" />
                </div>
                <div className='z-10 absolute  max-600:px-[12px]' >
                    <div className=''>
                        <div className=' max-600:px-[0]  h-[70px] pt-[20px] mx-[300px] max-1618:mx-[47px]  max-769:mx-[12px] max-426:mx-0 flex items-center justify-between '>
                            <div className='flex  max-600:w-[100%]'>
                                <button>
                                    <div className=' absolute 900:hidden text-white py-0'>
                                        {([' '] as const).map((anchor) => (
                                            <React.Fragment key={anchor}>
                                                <Button className='h-[30px] p-0 ' onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                                                <SwipeableDrawer
                                                    open={state[anchor]}
                                                    onClose={toggleDrawer(anchor, false)}
                                                    onOpen={toggleDrawer(anchor, true)}
                                                >
                                                    {list(anchor)}
                                                </SwipeableDrawer>
                                            </React.Fragment>
                                        ))}
                                    </div>
                                    <img className=' pr-[30px] 900:hidden ' src={link} alt="menu" />
                                </button>
                                <img className='pl-[25px] max-600:pl-0 max-600:mx-auto   relative h-[100px] max-600:h-[80px]' src={logo} alt="logo" />
                            </div>
                            <div className=' text-textColor text-[15px] flex justify-between gap-[20px] max-1040:text-[13px] max-900:hidden'>
                                <div className=' '>
                                    <ThemeProvider theme={theme}>
                                        <Button className='p-0 my-auto'
                                            id="menubutton1"
                                            aria-owns={menu1AnchorEl ? "simple-menu1" : undefined}
                                            aria-haspopup="true"
                                            onClick={handleClickMenu1}
                                            onMouseOver={handleClickMenu1}
                                            onMouseLeave={handleCloseHoverMenu1}
                                        >
                                            <span className='text-textColor normal-case text-[15px] font-medium leading-[120%] pr-[5px]'>Home</span>
                                            <div className="my-auto mx-auto border-textColor h-[8px] w-[8px] border-b-2 border-r-2 transform rotate-45 "></div>
                                        </Button>
                                        <Menu className='p-[20px]'
                                            id="simple-menu1"
                                            anchorEl={menu1AnchorEl}
                                            open={Boolean(menu1AnchorEl)}
                                            onClose={handleCloseMenu1}
                                            MenuListProps={{
                                                onMouseEnter: handleHover,
                                                onMouseLeave: handleCloseMenu1,
                                                style: { pointerEvents: "auto" }
                                            }}
                                            getContentAnchorEl={null}
                                            anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
                                            PopoverClasses={{
                                                root: styles.popOverRoot
                                            }}
                                        >
                                            <MenuItem onClick={handleCloseMenu1}>Home1</MenuItem>
                                            <MenuItem onClick={handleCloseMenu1}>Home2</MenuItem>
                                            <MenuItem onClick={handleCloseMenu1}>Home3</MenuItem>
                                        </Menu>
                                    </ThemeProvider>
                                </div>
                                <div className=' '>
                                    <ThemeProvider theme={theme}>
                                        <Button className='p-0 my-auto'
                                            id="menubutton2"
                                            aria-owns={menu2AnchorEl ? "simple-menu2" : undefined}
                                            aria-haspopup="true"
                                            onClick={handleClickMenu2}
                                            onMouseOver={handleClickMenu2}
                                            onMouseLeave={handleCloseHoverMenu2}
                                        >
                                            <span className='text-textColor normal-case text-[15px] font-medium leading-[120%] pr-[5px]'>Instructor</span>
                                            <div className="my-auto mx-auto border-textColor h-[8px] w-[8px] border-b-2 border-r-2 transform rotate-45 "></div>
                                        </Button>
                                        <Menu className='p-[20px]'
                                            id="simple-menu2"
                                            anchorEl={menu2AnchorEl}
                                            open={Boolean(menu2AnchorEl)}
                                            onClose={handleCloseMenu2}
                                            MenuListProps={{
                                                onMouseEnter: handleHover,
                                                onMouseLeave: handleCloseMenu2,
                                                style: { pointerEvents: "auto" }
                                            }}
                                            getContentAnchorEl={null}
                                            anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
                                            PopoverClasses={{
                                                root: styles.popOverRoot
                                            }}
                                        >
                                            <MenuItem onClick={handleCloseMenu2}>Instructor1</MenuItem>
                                            <MenuItem onClick={handleCloseMenu2}>Instructor2</MenuItem>
                                            <MenuItem onClick={handleCloseMenu2}>Instructor3</MenuItem>
                                        </Menu>
                                    </ThemeProvider>
                                </div>
                                <div className=' '>
                                    <ThemeProvider theme={theme}>
                                        <Button className='p-0 my-auto'
                                            id="menubutton3"
                                            aria-owns={menu3AnchorEl ? "simple-menu3" : undefined}
                                            aria-haspopup="true"
                                            onClick={handleClickMenu3}
                                            onMouseOver={handleClickMenu3}
                                            onMouseLeave={handleCloseHoverMenu3}
                                        >
                                            <span className='text-textColor normal-case text-[15px] font-medium leading-[120%] pr-[5px]'>Student</span>
                                            <div className="my-auto mx-auto border-textColor h-[10px] w-[10px] border-b-2 border-r-2 transform rotate-45 "></div>
                                        </Button>
                                        <Menu
                                            className='p-[20px]'
                                            id="simple-menu3"
                                            anchorEl={menu3AnchorEl}
                                            open={Boolean(menu3AnchorEl)}
                                            onClose={handleCloseMenu3}
                                            MenuListProps={{
                                                onMouseEnter: handleHover,
                                                onMouseLeave: handleCloseMenu3,
                                                style: { pointerEvents: "auto" }
                                            }}
                                            getContentAnchorEl={null}
                                            anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
                                            PopoverClasses={{
                                                root: styles.popOverRoot
                                            }}
                                        >
                                            <MenuItem onClick={handleCloseMenu3}>Student1</MenuItem>
                                            <MenuItem onClick={handleCloseMenu3}>Student2</MenuItem>
                                            <MenuItem onClick={handleCloseMenu3}>Student3</MenuItem>
                                        </Menu>
                                    </ThemeProvider>
                                </div>
                                <div className=' '>
                                    <ThemeProvider theme={theme}>
                                        <Button className='p-0 my-auto'
                                            id="menubutton4"
                                            aria-owns={menu4AnchorEl ? "simple-menu4" : undefined}
                                            aria-haspopup="true"
                                            onClick={handleClickMenu4}
                                            onMouseOver={handleClickMenu4}
                                            onMouseLeave={handleCloseHoverMenu4}
                                        >
                                            <span className='text-textColor normal-case text-[15px] font-medium leading-[120%] pr-[5px]'>Pages</span>
                                            <div className="my-auto mx-auto border-textColor h-[10px] w-[10px] border-b-2 border-r-2 transform rotate-45 "></div>
                                        </Button>
                                        <Menu
                                            className='p-[20px]'
                                            id="simple-menu4"
                                            anchorEl={menu4AnchorEl}
                                            open={Boolean(menu4AnchorEl)}
                                            onClose={handleCloseMenu4}
                                            MenuListProps={{
                                                onMouseEnter: handleHover,
                                                onMouseLeave: handleCloseMenu4,
                                                style: { pointerEvents: "auto" }
                                            }}
                                            getContentAnchorEl={null}
                                            anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
                                            PopoverClasses={{
                                                root: styles.popOverRoot
                                            }}
                                        >
                                            <MenuItem onClick={handleCloseMenu4}>Pages1</MenuItem>
                                            <MenuItem onClick={handleCloseMenu4}>Pages2</MenuItem>
                                            <MenuItem onClick={handleCloseMenu4}>Pages3</MenuItem>
                                        </Menu>
                                    </ThemeProvider>
                                </div>
                                <div className=' '>
                                    <ThemeProvider theme={theme}>
                                        <Button className='p-0 my-auto'
                                            id="menubutton5"
                                            aria-owns={menu5AnchorEl ? "simple-menu5" : undefined}
                                            aria-haspopup="true"
                                            onClick={handleClickMenu5}
                                            onMouseOver={handleClickMenu5}
                                            onMouseLeave={handleCloseHoverMenu5}
                                        >
                                            <span className='text-textColor normal-case text-[15px] font-medium leading-[120%] pr-[5px]'>Blog</span>
                                            <div className="my-auto mx-auto border-textColor h-[10px] w-[10px] border-b-2 border-r-2 transform rotate-45 "></div>
                                        </Button>
                                        <Menu
                                            className='p-[20px]'
                                            id="simple-menu5"
                                            anchorEl={menu5AnchorEl}
                                            open={Boolean(menu5AnchorEl)}
                                            onClose={handleCloseMenu5}
                                            MenuListProps={{
                                                onMouseEnter: handleHover,
                                                onMouseLeave: handleCloseMenu5,
                                                style: { pointerEvents: "auto" }
                                            }}
                                            getContentAnchorEl={null}
                                            anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
                                            PopoverClasses={{
                                                root: styles.popOverRoot
                                            }}
                                        >
                                            <MenuItem onClick={handleCloseMenu5}>Blog1</MenuItem>
                                            <MenuItem onClick={handleCloseMenu5}>Blog2</MenuItem>
                                            <MenuItem onClick={handleCloseMenu5}>Blog3</MenuItem>
                                        </Menu>
                                    </ThemeProvider>
                                </div>
                            </div>
                            <div className='flex font-bold max-600:hidden'>
                                <button className='w-[165px] h-[46px] text-[16px] max-1040:w-[120px] max-1040:h-[35px] max-1040:mr-3  text-[#FFFFFF] bg-darkblue mr-5 rounded-[5px]'>Login</button>
                                <button className='w-[165px] h-[46px] text-[16px] max-1040:w-[120px] max-1040:h-[35px]  text-[#FFFFFF] bg-green1920 max-1041:bg-orange1040 rounded-[5px]'>Sign up</button>
                            </div>
                        </div>
                        <div className=' mx-[300px] pt-[140px] max-1618:mx-[72px] max-769:mx-[12px] max-426:mx-0 '>
                            <div className=''>
                                <div className='font-bold text-[20px] max-768:text-[16px] max-390:text-[15px] text-green1920 max-1041:text-orange1040'>The Leader in Online Learning</div>
                                <div className='font-bold text-[48px] max-768:text-[30px] max-390:text-[25px]  text-lineblue pt-[24px] '>Engaging & Accessible Online </div>
                                <div className='font-bold text-[48px] max-768:text-[30px] max-390:text-[25px]  text-lineblue'>Courses For All</div>
                            </div>
                            <div className=' pt-[40px]'>
                                <div className='bg-[#fff] max-1040:w-[100%] w-[856px] max-600:p-[20px]  p-[11px] h-[72px] max-600:h-[auto]  600:flex  600:justify-between  max-600:grid border-[1px] rounded-[10px] border-[#7A9EDD]'>
                                    <div className='font-bold flex items-center justify-center max-600:justify-between'>
                                        <select value={age} onChange={handleChange}>
                                            <option value="">Select Category </option>
                                            <option className='mx-auto' value="option1">option1</option>
                                            <option className='mx-auto' value="option2">option2</option>
                                            <option className='mx-auto' value="option3">option3</option>
                                        </select>
                                    </div>
                                    <input className='max-600:w-[100%] max-600:border-[1px] max-600:rounded-[10px] max-600:border-[#7A9EDD] w-[50%] max-600:mt-[25px] max-600:mb-[13px] max-600:px-[16px] max-600:py-[15px] ' placeholder='Search School, Online eductional centers, etc' />
                                    <button className=' max-600:w-[100%] max-600:h-[40px] w-[220px] max-768:w-[20%] bg-green1920 font-bold text-[#FFFFFF] rounded-[5px] max-1041:bg-orange1040 max-600:h-[40px]'>Search</button>
                                </div>
                                <div className='pt-[25px]'>
                                    <p className='text-lineblue font-medium'>Trusted by over 15K Users worldwide since 2022</p>
                                    <div className='pt-[16px] '>
                                        <p className='font-bold flex text-[#21B477] justify-start text-[15px]'>4.4
                                            <img className='pl-[5px] h-[20px]' src={stargreen} alt="" />
                                            <img className='pl-[5px] h-[20px]' src={stargreen} alt="" />
                                            <img className='pl-[5px] h-[20px]' src={stargreen} alt="" />
                                            <img className='pl-[5px] h-[20px]' src={stargreen} alt="" />
                                            <img className='pl-[5px] h-[20px]' src={stargreen} alt="" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[230px]'>
                            </div>
                        </div>

                    </div>
                    <div className='mx-[300px] grid grid-cols-2 max-1618:mx-[72px] max-769:mx-[12px] max-426:mx-0 max-769:grid-cols-1'>
                        <div className='px-[12px] max-769:order-2 max-600:order-1 max-426:px-0'>
                            <span className='leading-[150%] text-green1920 font-semibold text-[20px] max-1041:text-orange1040'>Learn with DreamLMS</span>
                            <h1 className='leading-[120%]  text-[#4F4F4F] font-bold text-[32px] pt-[15px] pb-[50px] max-600:text-[20px]'>Get Trained By Experts & Professionals
                                around the World</h1>
                            <p className='pb-[50px] text-[16px] leading-[150%] max-600:text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam dolor fermentum
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

                        <div className='  max-769:order-1 max-600:order-2 max-600:grid-cols-1 px-[12px] grid grid-rows-2 grid-cols-2 gap-[24px] text-center bg-[#F5F5F5] '>
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
                                <div className='max-769:my-[70px]'>
                                    <img className='mx-auto  pb-[20px]' src={two} alt="" />
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
                                <div className='max-769:my-[70px]'>
                                    <img className='mx-auto  pb-[20px]' src={four} alt="" />
                                    <div>
                                        <span className='text-[#392C7D] pb-[8px] text-[28px] font-bold leading-[120%]'>10K</span>
                                        <p className='text-[#5C5C5C] text-[20px] leading-[150%] font-medium'>Online Students</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-[300px] py-[60px]  max-1618:px-[72px] max-1025:px-[60px] max-831:px-[30px] max-769:px-[12px]  max-600:px-0 bg-[#F5F5F5]'>
                        <div className='text-center mb-[50px]'>
                            <span className=' text-[20px] leading-[150%] text-green1920 font-semibold max-1041:text-orange1040'>Favourite Course</span>
                            <h1 className='text-[32px] font-bold text-[#4F4F4F] leading-[120%]  pt-[15px] pb-[24px] max-600:text-[20px]'>Top Category</h1>
                            <p className='px-[298px] text-[16px] font-normal leading-[150%] text-[#5C5C5C] max-1041:px-[75px] max-600:px-0 max-600:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum
                                gravida maecenas augue elementum et neque. Suspendisse imperdiet.
                            </p>
                        </div>
                        <div className='grid grid-rows-2 grid-cols-4 max-768:grid-rows-4 max-768:grid-cols-2 max-600:grid-cols-1  gap-[24px] py-[12px] '>
                            <div className='grid-cols-1 grid-rows-1 p-[31px]  bg-[#fff]  rounded-[10px]'>
                                <img src={category1} alt="" />
                                <div>
                                    <p className='text-colortextcategory text-[20px] font-bold leading-[120%] max-1025:h-[48px]'>Angular Development</p>
                                    <p className='text-[16px] font-normal leading-[150%] text-[#22100D]'>40 Instructors</p>
                                </div>
                            </div>
                            <div className='grid-cols-1 grid-rows-1 p-[31px]  bg-white  rounded-[10px]'>
                                <img src={category2} alt="" />
                                <div>
                                    <p className='text-colortextcategory text-[20px] font-bold leading-[120%] max-1025:h-[48px]'>Python Development</p>
                                    <p className='text-[16px] font-normal leading-[150%] text-[#22100D]'>20 Instructors</p>
                                </div>
                            </div>
                            <div className='grid-cols-1 grid-rows-1 p-[31px]  bg-white  rounded-[10px]'>
                                <img src={category3} alt="" />
                                <div>
                                    <p className='text-colortextcategory text-[20px] font-bold leading-[120%] max-1025:h-[48px]'>Node Js Development</p>
                                    <p className='text-[16px] font-normal leading-[150%] text-[#22100D]'>120 Instructors</p>
                                </div>
                            </div>
                            <div className='grid-cols-1 grid-rows-1 p-[31px]  bg-white  rounded-[10px]'>
                                <img src={category4} alt="" />
                                <div>
                                    <p className='text-colortextcategory text-[20px] font-bold leading-[120%] max-1025:h-[48px]'>PHP Development</p>
                                    <p className='text-[16px] font-normal leading-[150%] text-[#22100D]'>40 Instructors</p>
                                </div>
                            </div>
                            <div className='grid-cols-1 grid-rows-1 p-[31px]  bg-white  rounded-[10px]'>
                                <img src={category5} alt="" />
                                <div>
                                    <p className='text-colortextcategory text-[20px] font-bold leading-[120%] max-1025:h-[48px]'>Docker Development</p>
                                    <p className='text-[16px] font-normal leading-[150%] text-[#22100D]'>40 Instructors</p>
                                </div>
                            </div>
                            <div className='grid-cols-1 grid-rows-1 p-[31px]  bg-white  rounded-[10px]'>
                                <img src={category6} alt="" />
                                <div>
                                    <p className='text-colortextcategory text-[20px] font-bold leading-[120%] max-1025:h-[48px]'>Swift Development</p>
                                    <p className='text-[16px] font-normal leading-[150%] text-[#22100D]'>40 Instructors</p>
                                </div>
                            </div>
                            <div className='grid-cols-1 grid-rows-1 p-[31px]  bg-white  rounded-[10px]'>
                                <img src={category7} alt="" />
                                <div>
                                    <p className='text-colortextcategory text-[20px] font-bold leading-[120%] max-1025:h-[48px]'>Photography</p>
                                    <p className='text-[16px] font-normal leading-[150%] text-[#22100D]'>40 Instructors</p>
                                </div>
                            </div>
                            <div className='grid-cols-1 grid-rows-1 p-[31px]  bg-white  rounded-[10px]'>
                                <img src={category8} alt="" />
                                <div>
                                    <p className='text-colortextcategory text-[20px] font-bold leading-[120%] max-1025:h-[48px]'>Business</p>
                                    <p className='text-[16px] font-normal leading-[150%] text-[#22100D] inset-x-0 bottom-0'>40 Instructors</p>
                                </div>
                            </div>
                        </div>
                        <button className='mt-[40px] mx-auto text-[16px] leading-[150%] font-bold px-[46px] py-[13px] bg-green1920 max-1041:bg-orange1040 text-[#FFF] flex h-[50px] items-center justify-center rounded-[5px]'>
                            View all Category
                            <img className='pl-[9px]' src={right} alt="" />
                        </button>
                    </div>
                    <div className='px-[300px] py-[60px] max-426:pt-[20px]  max-600:pb-[60px]  max-1618:px-[72px] max-1025:px-[60px] max-769:px-[0] bg-[#F5F5F5] '>
                        <div className='text-center'>
                            <span className='leading-[150%] text-green1920 font-semibold text-[20px] max-1041:text-orange1040'>What's New</span>
                            <h1 className='leading-[120%]  text-[#4F4F4F] font-bold text-[32px] pt-[15px] pb-[25px] max-600:text-[20px]'>Featured Courses</h1>
                            <p className='pb-[50px] text-[#5C5C5C] px-[298px] text-[16px] leading-[150%] max-1041:px-[75px] max-600:px-0 max-600:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum
                                gravida maecenas augue elementum et neque. Suspendisse imperdiet.</p>
                        </div>
                        <div className='grid grid-rows-2 grid-cols-3 max-768:grid-rows-3 max-768:grid-cols-2 max-600:grid-cols-1 gap-[24px] p-[12px] max-426:p-0'>
                            <div className='grid-cols-1 grid-rows-1 p-[6px] bg-[#fff]'>
                                <img className='w-[100%]' src={couser1} alt="" />
                                <p className='h-[40px] flex text-[#A5A5A5] justify-start text-[15px] pt-[20px]'>
                                    <img className='pl-[10px]' src={staryealow} alt="" />
                                    <img className='pl-[5px]' src={staryealow} alt="" />
                                    <img className='pl-[5px]' src={staryealow} alt="" />
                                    <img className='pl-[5px]' src={staryealow} alt="" />
                                    <img className='pl-[5px] pr-[12px]' src={staryealow} alt="" />
                                    203 reviews
                                </p>
                                <h1 className='text-[#324FA2] text-[18px] font-bold leading-[120%] m-[10px] max-1441:h-[45px] max-1025:h-[65px] max-1141:h-[75px] max-971:h-[80px] '>The Complete Web Developer PHP framework Course 2.0</h1>
                                <div className='text-[14px] font-normal pl-[10px]'>By <span className='text-[#FF0100] '>Russell T. Johnson</span></div>
                                <div className='flex justify-between pt-[33px]'>
                                    <div className=' w-[50%] flex text-[14px] text-[#5C5C5C] font-medium leading-[150%] pl-[10px]'>
                                        <img className='pr-[8px] h-[25px] w-[30px] ' src={time} alt="" />
                                        <span className='my-auto'>6hr 30min</span>
                                    </div>
                                    <div>
                                        <h1 className='text-[20px] leading-[120%] font-bold text-[#21B477]'>$400 <span className='line-through text-[#FF602E] text-[14px] font-normal '> $99.00</span></h1>
                                    </div>
                                </div>
                            </div>
                            <div className='grid-cols-1 grid-rows-1 p-[6px] bg-[#fff]'>
                                <img className='w-[100%]' src={couser2} alt="" />
                                <p className='h-[40px] flex text-[#A5A5A5] justify-start text-[15px] pt-[20px]'>
                                    <img className='pl-[10px]' src={staryealow} alt="" />
                                    <img className='pl-[5px]' src={staryealow} alt="" />
                                    <img className='pl-[5px]' src={staryealow} alt="" />
                                    <img className='pl-[5px]' src={staryealow} alt="" />
                                    <img className='pl-[5px] pr-[12px]' src={staryealow} alt="" />
                                    243 reviews
                                </p>
                                <h1 className='text-[#324FA2] text-[18px] font-bold leading-[120%] m-[10px] max-1441:h-[45px] max-1025:h-[65px] max-1141:h-[75px] max-971:h-[80px] '>Wordpress for Beginners - Master Wordpress Quickly</h1>
                                <div className='text-[14px] font-normal pl-[10px]'>By <span className='text-[#FF0100] '>Cristofer Nolen</span></div>
                                <div className='flex justify-between pt-[33px]'>
                                    <div className='w-[50%] flex text-[14px] text-[#5C5C5C] font-medium leading-[150%] pl-[10px]'>
                                        <img className='pr-[8px] h-[25px] w-[30px]' src={time} alt="" />
                                        <span className='my-auto'>6hr 30min</span>
                                    </div>
                                    <div>
                                        <h1 className='text-[20px] leading-[120%] font-bold text-[#21B477]'>$300 <span className='line-through text-[#FF602E] text-[14px] font-normal '> $99.00</span></h1>
                                    </div>
                                </div>

                            </div>
                            <div className='grid-cols-1 grid-rows-1 p-[6px] bg-[#fff]'>
                                <img className='w-[100%]' src={couser3} alt="" />
                                <p className='h-[40px] flex text-[#A5A5A5] justify-start text-[15px] pt-[20px]'>
                                    <img className='pl-[10px]' src={staryealow} alt="" />
                                    <img className='pl-[5px]' src={staryealow} alt="" />
                                    <img className='pl-[5px]' src={staryealow} alt="" />
                                    <img className='pl-[5px]' src={staryealow} alt="" />
                                    <img className='pl-[5px] pr-[12px]' src={staryealow} alt="" />
                                    243 reviews
                                </p>
                                <h1 className='text-[#324FA2] text-[18px] font-bold leading-[120%] m-[10px] max-1441:h-[45px] max-1025:h-[65px] max-1141:h-[75px] max-971:h-[80px] '>Learn Angular Fundamentals From beginning to advance lavel</h1>
                                <div className='text-[14px] font-normal pl-[10px]'>By <span className='text-[#FF0100] '>Cristofer Nolen</span></div>
                                <div className='flex justify-between pt-[33px]'>
                                    <div className='w-[50%] flex text-[14px] text-[#5C5C5C] font-medium leading-[150%] pl-[10px]'>
                                        <img className='pr-[8px] h-[25px] w-[30px]' src={time} alt="" />
                                        <span className='my-auto'>6hr 30min</span>
                                    </div>
                                    <div>
                                        <h1 className='text-[20px] leading-[120%] font-bold text-[#21B477]'>$300 <span className='line-through text-[#FF602E] text-[14px] font-normal '> $99.00</span></h1>
                                    </div>
                                </div>
                            </div>
                            <div className='grid-cols-1 grid-rows-1 p-[6px] bg-[#fff]'>
                                <img className='w-[100%]' src={couser4} alt="" />
                                <p className='h-[40px] flex text-[#A5A5A5] justify-start text-[15px] pt-[20px]'>
                                    <img className='pl-[10px]' src={staryealow} alt="" />
                                    <img className='pl-[5px]' src={staryealow} alt="" />
                                    <img className='pl-[5px]' src={staryealow} alt="" />
                                    <img className='pl-[5px]' src={staryealow} alt="" />
                                    <img className='pl-[5px] pr-[12px]' src={staryealow} alt="" />
                                    243 reviews
                                </p>
                                <h1 className='text-[#324FA2] text-[18px] font-bold leading-[120%] m-[10px] max-1441:h-[45px] max-1025:h-[65px] max-1141:h-[75px] max-971:h-[80px] '>Build Responsive Real World Websites with HTML5 and CSS3</h1>
                                <div className='text-[14px] font-normal pl-[10px]'>By <span className='text-[#FF0100] '>Cristofer Nolen</span></div>
                                <div className='flex justify-between pt-[33px]'>
                                    <div className='w-[50%] flex text-[14px] text-[#5C5C5C] font-medium leading-[150%] pl-[10px]'>
                                        <img className='pr-[8px] h-[25px] w-[30px]' src={time} alt="" />
                                        <span className='my-auto'>6hr 30min</span>
                                    </div>
                                    <div>
                                        <h1 className='text-[20px] leading-[120%] font-bold text-[#21B477]'>$300 <span className='line-through text-[#FF602E] text-[14px] font-normal '> $99.00</span></h1>
                                    </div>
                                </div>
                            </div>
                            <div className='grid-cols-1 grid-rows-1 p-[6px] bg-[#fff]'>
                                <img className='w-[100%]' src={couser5} alt="" />
                                <p className='h-[40px] flex text-[#A5A5A5] justify-start text-[15px] pt-[20px]'>
                                    <img className='pl-[10px]' src={staryealow} alt="" />
                                    <img className='pl-[5px]' src={staryealow} alt="" />
                                    <img className='pl-[5px]' src={staryealow} alt="" />
                                    <img className='pl-[5px]' src={staryealow} alt="" />
                                    <img className='pl-[5px] pr-[12px]' src={staryealow} alt="" />
                                    243 reviews
                                </p>
                                <h1 className='text-[#324FA2] text-[18px] font-bold leading-[120%] m-[10px] max-1441:h-[45px] max-1025:h-[65px] max-1141:h-[75px] max-971:h-[80px] '>C# Developers Double Your Coding Speed with Visual Studio</h1>
                                <div className='text-[14px] font-normal pl-[10px]'>By <span className='text-[#FF0100] '>Cristofer Nolen</span></div>
                                <div className='flex justify-between pt-[33px]'>
                                    <div className='w-[50%] flex text-[14px] text-[#5C5C5C] font-medium leading-[150%] pl-[10px]'>
                                        <img className='pr-[8px] h-[25px] w-[30px]' src={time} alt="" />
                                        <span className='my-auto'>6hr 30min</span>
                                    </div>
                                    <div>
                                        <h1 className='text-[20px] leading-[120%] font-bold text-[#21B477]'>$300 <span className='line-through text-[#FF602E] text-[14px] font-normal '> $99.00</span></h1>
                                    </div>
                                </div>
                            </div>
                            <div className='grid-cols-1 grid-rows-1 p-[6px] bg-[#fff]'>
                                <img className='w-[100%]' src={couser6} alt="" />
                                <p className='h-[40px] flex text-[#A5A5A5] justify-start text-[15px] pt-[20px]'>
                                    <img className='pl-[10px]' src={staryealow} alt="" />
                                    <img className='pl-[5px]' src={staryealow} alt="" />
                                    <img className='pl-[5px]' src={staryealow} alt="" />
                                    <img className='pl-[5px]' src={staryealow} alt="" />
                                    <img className='pl-[5px] pr-[12px]' src={staryealow} alt="" />
                                    243 reviews
                                </p>
                                <h1 className='text-[#324FA2] text-[18px] font-bold leading-[120%] m-[10px] max-1441:h-[45px] max-1025:h-[65px] max-1141:h-[75px] max-971:h-[80px] '>Information About UI/UX Design Degree</h1>
                                <div className='text-[14px] font-normal pl-[10px]'>By <span className='text-[#FF0100]  '>Cristofer Nolen</span></div>
                                <div className='flex justify-between pt-[33px]'>
                                    <div className='w-[50%] flex text-[14px] text-[#5C5C5C] font-medium leading-[150%] pl-[10px]'>
                                        <img className='pr-[8px] h-[25px] w-[30px]' src={time} alt="" />
                                        <span className='my-auto'>6hr 30min</span>
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
                    <div className='px-[300px] py-[60px] max-426:pt-[20px] max-600:pb-[60px]  max-1618:px-[72px] max-1025:px-[60px] max-769:px-[12px] max-600:px-[0]'>
                        <div className='pt-[80px] max-426:pt-[20px] grid grid-cols-2 max-768:grid-cols-1'>
                            <div><img className='mx-[75px] max-1040:m-0 max-768:mx-auto ' src={skil1} alt="" /></div>
                            <div className='my-auto p-[12px] max-426:px-0'>
                                <span className=' text-[20px] leading-[150%] text-green1920 font-semibold max-1041:text-orange1040'>Growup Your Skill</span>
                                <h1 className='text-[32px] font-bold text-[#324FA2] leading-[120%]  pt-[15px] pb-[24px] max-600:text-[20px]'>Learn Anything you want today</h1>
                                <p className=' text-[16px] font-normal leading-[150%] text-[#5C5C5C] max-600:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam dolor fermentum
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
                    <div className='px-[300px] py-[60px] max-426:pt-[20px] max-600:pb-[60px]  max-1618:px-[72px] max-1025:px-[60px] max-769:px-[12px]  max-600:px-[0] bg-[#F5F5F5]'>
                        <div className='text-center'>
                            <span className='leading-[150%] text-green1920 font-semibold text-[20px] max-1041:text-orange1040'>What's New</span>
                            <h1 className='leading-[120%]  text-[#4F4F4F] font-bold text-[32px] pt-[15px] pb-[25px] max-600:text-[20px]'>Master the skills to drive your career</h1>
                            <p className='pb-[50px] px-[298px] text-[#5C5C5C] text-[16px] leading-[150%] max-1041:px-[75px] max-769:px-[12px] max-600:px-0 max-600:text-[16px]'>Get certified, master modern tech skills, and level up your career — whether you’re starting
                                out or a seasoned pro. 95% of eLearning learners report our hands-on content directly
                                helped their careers.</p>
                        </div>
                        <div>
                            <div className='grid grid-cols-2 pt-[50px] max-426:pt-[20px] max-900:grid-cols-1 '>
                                <div className='my-auto text-right pr-[90px] max-1025:pr-[60px] max-900:pr-0 max-900:text-center'>
                                    <h1 className='text-[#5C5C5C] text-[36px] font-bold leading-[120%] max-1025:text-[24px] max-600:text-[20px] pb-[25px]'>Award Winning Course Management</h1>
                                    <p className='text-[16px] max-1025:text-[14px] max-600:px-0 max-769:p-[12px] max-426:p-0 max-600:text-[14px]  max-426:pb-[25px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam dolor
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
                                <div className='my-auto text-left px-[55px] max-769:px-0 max-900:order-1 max-900:text-center max-426:p-0 '>
                                    <h1 className='text-[#5C5C5C] text-[36px] font-bold leading-[120%] max-1025:text-[24px] max-600:text-[20px] pb-[25px]'>Award Winning Course
                                        Management</h1>
                                    <p className='text-[16px] max-1025:text-[14px] max-600:text-[14px] max-769:p-[12px] max-426:p-0 max-426:pb-[25px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                                        dolor fermentum massa viverra congue proin. A volutpat eget
                                        ultrices velit nunc orci. Commodo quis integer a felis ac vel
                                        mauris a morbi. Scelerisque nunc accumsan elementum aenean
                                        nisl lacinia. Congue enim aliquet ac vitae turpis. Neque,
                                        bibendum imperdiet sed ullamcorper morbi amet. Facilisi odio
                                        amet, nunc quam ut nulla purus adipiscing pharetra.</p>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 pt-[50px] max-900:grid-cols-1 max-900:text-center'>
                                <div className='my-auto text-right pr-[90px] max-1025:pr-[60px] max-900:pr-0 '>
                                    <h1 className='text-[#5C5C5C] text-[36px] max-1025:text-[24px] max-900:text-center font-bold leading-[120%] max-600:text-[20px] pb-[25px]'>Certification for solid
                                        development of your Carrer</h1>
                                    <p className='text-[16px] max-1025:text-[14px] text-center max-600:text-[14px] max-769:p-[12px] max-426:p-0 max-426:pb-[25px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam dolor
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
                    <div className='px-[300px] py-[60px]  max-600:pb-[60px]  max-1618:px-[72px] max-1025:px-[60px] max-769:px-[12px] max-600:px-[0] mx-auto bg-[#F5F5F5]'>
                        <img className='mx-auto pt-[50px] max-426:pt-0' src={user} alt="" />
                        <div className=' mx-auto text-center pt-[50px] '>
                            <h1 className='text-[32px] font-bold leading-[120%] text-[#4F4F4F] max-600:text-[20px] pb-[25px]'>Join over <span className='text-[#1E7115] max-1041:text-orange1040'>5 Million</span> Students</h1>
                            <p className='pb-[50px] px-[298px] text-[#5C5C5C] text-[16px] leading-[150%] max-1041:px-[75px] max-769:px-[12px] max-600:px-0 max-600:text-[16px]'>Get certified, master modern tech skills, and level up your career — whether you’re starting
                                out or a seasoned pro. 95% of eLearning learners report our hands-on content directly
                                helped their careers.</p>
                            <div className='flex justify-between px-[12px] pt-[50px] max-426:pt-0 max-768:grid max-768:grid-cols-2 max-460:grid-cols-1 max-768:grid-rows-2 max-600:text-[16px] '>
                                <div className='max-460:pt-[20px]'>
                                    <p className='text-[24px] font-medium leading-[120%] text-orange1040 max-600:text-[20px] pb-[8px]'>253,085</p>
                                    <p className='text-[20px] text-[#5C5C5C] leading-[120%] uppercase '>Students Enrolled</p>
                                </div>
                                <div className='max-460:pt-[20px]'>
                                    <p className='text-[24px] font-medium leading-[120%] text-[#0DD3A3] max-600:text-[20px] pb-[8px]'>1,205</p>
                                    <p className='text-[20px] text-[#5C5C5C] leading-[120%] uppercase '>Total Courses</p>
                                </div>
                                <div className='max-460:pt-[20px]'>
                                    <p className='text-[24px] font-medium leading-[120%] text-[#392C7D] max-600:text-[20px] pb-[8px]'>253,085</p>
                                    <p className='text-[20px] text-[#5C5C5C] leading-[120%] uppercase '>Students Worldwide</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='px-[300px] py-[60px] max-600:pb-[60px]  max-1618:px-[72px] max-1025:px-[60px] max-971:px-[30px] max-769:px-[12px] max-600:px-[0] max-426:pt-0 bg-[#F5F5F5]'>
                        <div className='text-center'>
                            <span className='leading-[150%] text-green1920 font-semibold text-[20px] max-1041:text-orange1040'>New Courses</span>
                            <h1 className='leading-[120%]  text-[#4F4F4F] font-bold text-[32px] pt-[15px] pb-[25px] max-600:text-[20px]'>Trending Courses</h1>
                            <p className='pb-[50px] max-426:pb-[21px] text-[#5C5C5C] px-[298px] text-[16px] leading-[150%] max-1041:px-[75px] max-769:px-[12px] max-600:px-0 max-600:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum
                                gravida maecenas augue elementum et neque. Suspendisse imperdiet.</p>
                        </div>
                        <div className='bg-[#fff] pt-[50px] grid grid-rows-2 grid-cols-2 gap-[24px] p-[24px] max-1025:p-0 max-460:p-0 max-900:grid-cols-1 '>
                            <div className='flex max-900:flex-none max-461:grid max-461:grid-cols-1 '>
                                <img className='max-460:mx-auto h-[217px] w-100% max-769:h-[178px] max-391:h-[120px] my-auto' src={linkcouser1} alt="" />
                                <div className='pl-[20px] pr-[20px] max-1025:pr-0 max-1025:pl-[10px] max-w-[500px]'>
                                    <div className='h-[20px] max-426:h-[15px] max-391:h-[10px] flex text-[#A5A5A5] justify-start text-[15px] mt-[20px]'>
                                        <img className='' src={staryealow} alt="" />
                                        <img className='pl-[5px]' src={staryealow} alt="" />
                                        <img className='pl-[5px]' src={staryealow} alt="" />
                                        <img className='pl-[5px]' src={staryealow} alt="" />
                                        <img className='pl-[5px] pr-[12px]' src={staryealow} alt="" />
                                        <p className='max-1025:text-[13px] max-391:text-[10px] '>243 reviews</p>
                                    </div>
                                    <h1 className='text-[#324FA2] text-[20px] font-bold leading-[120%] mt-[15px] mb-[10px] max-1025:h-[96px] max-769:h-auto max-1025:text-[18px]'>Wordpress for Beginners - Master Wordpress Quickly</h1>
                                    <div className=' max-460:hidden w-[100%] flex text-[14px] text-[#22100D] font-medium leading-[150%]'>
                                        <img className='pr-[8px] w-[30px] h-[25px]' src={time2} alt="" />
                                        <p className='my-auto '>6hr 30min</p>
                                    </div>
                                    <div className='flex justify-between pt-[36px] max-1025:pt-[10px]'>
                                        <span className='line-through text-[#FF602E] text-[14px] font-normal '>Cristofer Nolen</span>
                                        <h1 className='text-[20px] leading-[120%] font-bold text-[#21B477]'>$300 </h1>
                                    </div>
                                </div>
                            </div>
                            <div className='flex max-900:flex-none max-461:grid max-461:grid-cols-1  '>
                                <img className='max-460:mx-auto h-[217px] w-100% max-769:h-[178px] max-391:h-[120px] my-auto' src={linkcouser2} alt="" />
                                <div className='pl-[20px] pr-[20px] max-1025:pr-0 max-1025:pl-[10px] max-w-[500px]'>
                                    <div className='h-[20px] max-426:h-[15px] max-391:h-[10px] flex text-[#A5A5A5] justify-start text-[15px] mt-[20px]'>
                                        <img className='' src={staryealow} alt="" />
                                        <img className='pl-[5px]' src={staryealow} alt="" />
                                        <img className='pl-[5px]' src={staryealow} alt="" />
                                        <img className='pl-[5px]' src={staryealow} alt="" />
                                        <img className='pl-[5px] pr-[12px]' src={staryealow} alt="" />
                                        <p className='max-1025:text-[13px] max-391:text-[10px]'>243 reviews</p>
                                    </div>
                                    <h1 className='text-[#324FA2] text-[20px] font-bold leading-[120%] mt-[15px] mb-[10px] max-1025:h-[96px] max-769:h-auto max-1025:text-[18px]'>C# Developers Double Your Coding Speed with Visual Studio</h1>
                                    <div className=' max-460:hidden w-[100%] flex text-[14px] text-[#22100D] font-medium leading-[150%]'>
                                        <img className='pr-[8px] w-[30px] h-[25px]' src={time2} alt="" />
                                        <span className='my-auto'>6hr 30min</span>
                                    </div>
                                    <div className='flex justify-between pt-[36px] max-1025:pt-[10px]'>
                                        <span className='line-through text-[#FF602E] text-[14px] font-normal '>Cristofer Nolen</span>
                                        <h1 className='text-[20px] leading-[120%] font-bold text-[#21B477]'>$300 </h1>
                                    </div>
                                </div>
                            </div>
                            <div className='flex max-900:flex-none max-461:grid max-461:grid-cols-1   '>
                                <img className='max-460:mx-auto h-[217px] w-100% max-769:h-[178px] max-391:h-[120px] my-auto' src={linkcouser3} alt="" />
                                <div className='pl-[20px] pr-[20px] max-1025:pr-0 max-1025:pl-[10px] max-w-[500px]'>
                                    <div className='h-[20px] max-426:h-[15px] max-391:h-[10px] flex text-[#A5A5A5] justify-start text-[15px] mt-[20px]'>
                                        <img className='' src={staryealow} alt="" />
                                        <img className='pl-[5px]' src={staryealow} alt="" />
                                        <img className='pl-[5px]' src={staryealow} alt="" />
                                        <img className='pl-[5px]' src={staryealow} alt="" />
                                        <img className='pl-[5px] pr-[12px]' src={staryealow} alt="" />
                                        <p className='max-1025:text-[13px] max-391:text-[10px]'>243 reviews</p>
                                    </div>
                                    <h1 className='text-[#324FA2] text-[20px] font-bold leading-[120%] mt-[15px] mb-[10px] max-1025:h-[96px] max-769:h-auto max-1025:text-[18px]'>Learn Angular Fundamentals From beginning to advance lavel</h1>
                                    <div className='max-460:hidden w-[100%] flex text-[14px] text-[#22100D] font-medium leading-[150%]'>
                                        <img className='pr-[8px] w-[30px] h-[25px]' src={time2} alt="" />
                                        <span className='my-auto'>6hr 30min</span>
                                    </div>
                                    <div className='flex justify-between pt-[36px] max-1025:pt-[10px]'>
                                        <span className='line-through text-[#FF602E] text-[14px] font-normal '>Cristofer Nolen</span>
                                        <h1 className='text-[20px] leading-[120%] font-bold text-[#21B477]'>$300 </h1>
                                    </div>
                                </div>
                            </div>
                            <div className='flex max-900:flex-none max-461:grid max-461:grid-cols-1  '>
                                <img className='max-460:mx-auto h-[217px] w-100% max-769:h-[178px] max-391:h-[120px] my-auto' src={linkcouser4} alt="" />
                                <div className='pl-[20px] pr-[20px] max-1025:pr-0 max-1025:pl-[10px] max-w-[500px]'>
                                    <div className='h-[20px] max-426:h-[15px] max-391:h-[10px] flex text-[#A5A5A5] justify-start text-[15px] mt-[20px]'>
                                        <img className='' src={staryealow} alt="" />
                                        <img className='pl-[5px]' src={staryealow} alt="" />
                                        <img className='pl-[5px]' src={staryealow} alt="" />
                                        <img className='pl-[5px]' src={staryealow} alt="" />
                                        <img className='pl-[5px] pr-[12px]' src={staryealow} alt="" />
                                        <p className='max-1025:text-[13px] max-391:text-[10px]'>243 reviews</p>
                                    </div>
                                    <h1 className='text-[#324FA2] text-[20px] font-bold leading-[120%] mt-[15px] mb-[10px] max-1025:h-[96px] max-769:h-auto max-1025:text-[18px]'>Build Responsive Real World Websites with HTML5 and CSS3</h1>
                                    <div className='max-460:hidden w-[100%] flex text-[14px] text-[#22100D] font-medium leading-[150%]'>
                                        <img className='pr-[8px] w-[30px] h-[25px]' src={time2} alt="" />
                                        <span className='my-auto'>6hr 30min</span>
                                    </div>
                                    <div className='flex justify-between pt-[36px] max-1025:pt-[10px]'>
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
                    <div className=' p-[12px] py-[60px] max-426:pt-[20px] max-600:pb-[60px]   max-600:px-[0] grid grid-cols-2 max-1040:grid-cols-1 gap-[24px]'>
                        <img className='h-[777px] max-600:h-[500px]  w-full object-left object-cover max-1040:mx-auto rounded-[10px]' src={feature} alt="" />
                        <div className='p-[30px] max-600:p-0 '>
                            <h1 className='text-[#5C5C5C] text-[32px] font-bold leading-[120%] max-600:text-[20px]'>Want to share your knowledge?</h1>
                            <h1 className='text-[#5C5C5C] text-[32px] font-bold leading-[120%] max-600:text-[20px]'>Join us a Mentor</h1>
                            <p className='pt-[25px] text-[#292929] text-[16px] font-normal leading-[150%] max-769:text-[14px]'>High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.</p>
                            <div className='flex pt-[25px]'>
                                <img className='w-[70px] h-[70px] max-769:h-[50px] max-769:w-[50px] ' src={join1} alt="" />
                                <div className=' pl-[20px]'>
                                    <h4 className='text-[#5C5C5C] text-[16px] font-bold leading-[120%]'>Stay motivated with engaging instructors</h4>
                                    <p className='text-[#292929] text-[14px] font-normal leading-[150%]'>High-definition video is video of higher resolution and quality than standard-definition.</p>
                                    <p className='text-[#292929] text-[14px] font-normal leading-[150%]'>While there is no standardized meaning for high-definition, generally any video.</p>
                                </div>
                            </div>
                            <div className='flex pt-[25px]'>
                                <img className='w-[70px] h-[70px] max-769:h-[50px] max-769:w-[50px]' src={join2} alt="" />
                                <div className=' pl-[20px]'>
                                    <h4 className='text-[#5C5C5C] text-[16px] font-bold leading-[120%]'>Keep up with in the latest in cloud</h4>
                                    <p className='text-[#292929] text-[14px] font-normal leading-[150%]'>High-definition video is video of higher resolution and quality than standard-definition.</p>
                                    <p className='text-[#292929] text-[14px] font-normal leading-[150%]'>While there is no standardized meaning for high-definition, generally any video.</p>
                                </div>
                            </div>
                            <div className='flex pt-[25px]'>
                                <img className='w-[70px] h-[70px] max-769:h-[50px] max-769:w-[50px]' src={join3} alt="" />
                                <div className=' pl-[20px]'>
                                    <h4 className='text-[#5C5C5C] text-[16px] font-bold leading-[120%]'>Build skills your way, from labs to courses</h4>
                                    <p className='text-[#292929] text-[14px] font-normal leading-[150%]'>High-definition video is video of higher resolution and quality than standard-definition.</p>
                                    <p className='text-[#292929] text-[14px] font-normal leading-[150%]'>While there is no standardized meaning for high-definition, generally any video.</p>
                                </div>
                            </div>
                            <div className='flex pt-[25px]'>
                                <img className='w-[70px] h-[70px] max-769:h-[50px] max-769:w-[50px]' src={join4} alt="" />
                                <div className=' pl-[20px]'>
                                    <h4 className='text-[#5C5C5C] text-[16px] font-bold leading-[120%]'>Get certified with 100+ certification courses</h4>
                                    <p className='text-[#292929] text-[14px] font-normal leading-[150%]'>High-definition video is video of higher resolution and quality than standard-definition.</p>
                                    <p className='text-[#292929] text-[14px] font-normal leading-[150%]'>While there is no standardized meaning for high-definition, generally any video.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-[300px] py-[60px] max-600:pb-[60px]  max-1618:px-[72px] max-1025:px-[60px] max-769:px-[12px] max-600:px-[0] '>
                        <div className='text-center'>
                            <span className='leading-[150%] text-green1920 font-semibold text-[20px] max-1041:text-orange1040'>New Courses</span>
                            <h1 className='leading-[120%]  text-[#4F4F4F] font-bold text-[32px] pt-[15px] pb-[25px] max-600:text-[20px]'>Featured Instructor</h1>
                            <p className='pb-[50px] text-[#5C5C5C] px-[298px] text-[16px] leading-[150%] max-1041:px-[75px] max-460:px-[12px] max-600:text-[16px] max-769:px-[0px] max-426:px-0 max-426:pb-[21px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum
                                gravida maecenas augue elementum et neque. Suspendisse imperdiet.</p>
                        </div>
                        <div className='grid grid-cols-4 max-900:grid-cols-2 max-900:grid-rows-2 max-600:grid-cols-1 px-[12px] gap-[24px] max-426:px-0'>
                            <div>
                                <img className='w-[100%] rounded-[10px]' src={intructor1} alt="" />
                                <div className='px-[20px] pb-[20px]'>
                                    <div className='text-center py-[20px]'>
                                        <p className='text-[#22100D] text-[20px] font-semibold leading-[120%]'>Julian Adrose</p>
                                        <p className='text-[#324FA2] text-[16px] font-normal leading-[150%]'>Angular Expert</p>
                                    </div>
                                    <div className='flex mx-auto'>
                                        <p className='flex mx-auto pt-[20px] text-[#1E7115] max-1041:text-orange1040'> <img className='1041:hidden pr-[17px] h-[20px]' src={student2} alt="" /><img className='max-1041:hidden pr-[17px] h-[20px]' src={student} alt="" ></img> 50 Students</p>
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
                                        <p className='flex mx-auto pt-[20px] text-[#1E7115] max-1041:text-orange1040'>  <img className='1041:hidden pr-[17px] h-[20px]' src={student2} alt="" /><img className='max-1041:hidden pr-[17px] h-[20px]' src={student} alt="" ></img> 70 Students</p>
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
                                        <p className='flex mx-auto pt-[20px] text-[#1E7115] max-1041:text-orange1040'> <img className='1041:hidden pr-[17px] h-[20px]' src={student2} alt="" /><img className='max-1041:hidden pr-[17px] h-[20px]' src={student} alt="" ></img> 60 Students</p>
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
                                        <p className='flex mx-auto pt-[20px] text-[#1E7115] max-1041:text-orange1040 '> <img className='1041:hidden pr-[17px] h-[20px]' src={student2} alt="" /><img className='max-1041:hidden pr-[17px] h-[20px]' src={student} alt="" ></img> 80 Students</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className='mx-auto mt-[50px]  text-[16px] leading-[150%] font-bold px-[46px] py-[13px] bg-green1920 max-1041:bg-orange1040 text-[#FFF] flex h-[50px] items-center justify-center rounded-[5px]'>
                            View all Instructors
                            <img className='pl-[9px]' src={right} alt="" />
                        </button>
                    </div>
                    <div className='px-[300px] py-[60px] max-426:pt-[20px] max-600:py-bottom-[0px] max-1618:px-[72px] max-1025:px-[60px] max-769:px-[12px] max-600:px-[0]'>
                        <div className='text-center'>
                            <span className='leading-[150%] text-green1920 font-semibold text-[20px] max-1041:text-orange1040'>Check out these real reviews</span>
                            <h1 className='leading-[120%]  text-[#4F4F4F] font-bold text-[32px] pt-[15px] pb-[25px] max-600:text-[20px]'>Users-love-us Don't take it from us</h1>
                            <p className='pb-[50px] text-[#5C5C5C] px-[298px] text-[16px] leading-[150%] max-1041:px-[75px] max-460:px-[12px] max-769:px-[0] max-600:text-[16px] max-426:px-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum
                                gravida maecenas augue elementum et neque. Suspendisse imperdiet.</p>
                        </div>
                        <div className='px-[12px] grid grid-cols-2 max-900:grid-cols-1 max-426:px-[0px]'>
                            <img className='w-[100%] pr-[68px] my-auto max-900:mx-auto max-900:px-[90px] max-769:px-[0px]' src={review} alt="" />
                            <div className='max-900:text-center max-900:pt-[60px]'>
                                <h1 className=' pb-[25px] text-[36px] text-[#292929] font-medium leading-[120%] max-600:text-[20px]'>Helps us to improve our productivity</h1>
                                <p className='text-[16px] text-[#5C5C5C] font-normal leading-[181.25%] max-600:text-[14px] '>High-definition video is video of higher resolution and quality than standard-
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
                            <img className='mx-auto my-auto' src={lead1} alt="" />
                            <img className='mx-auto my-auto' src={lead2} alt="" />
                            <img className='mx-auto my-auto' src={lead3} alt="" />
                            <img className='mx-auto my-auto' src={lead4} alt="" />
                            <img className='mx-auto my-auto' src={lead5} alt="" />
                            <img className='mx-auto my-auto' src={lead6} alt="" />
                        </div>

                        <div className='pt-[70px] grid grid-cols-3 grid-rows-2 max-700:hidden 900:hidden'>
                            <img className='mx-auto' src={lead1} alt="" />
                            <img className='mx-auto' src={lead2} alt="" />
                            <img className='mx-auto' src={lead3} alt="" />
                            <img className='mx-auto' src={lead4} alt="" />
                            <img className='mx-auto' src={lead5} alt="" />
                            <img className='mx-auto' src={lead6} alt="" />
                        </div>

                        <div className='pt-[70px] grid grid-cols-3 gap-[24px] 700:hidden 900:hidden'>
                            <img className='mx-auto' src={lead1} alt="" />
                            <img className='mx-auto' src={lead2} alt="" />
                            <img className='mx-auto' src={lead3} alt="" />

                        </div>
                    </div>
                    <div className='px-[300px] py-[60px] max-426:pt-[20px] max-600:pb-[60px]  max-1618:px-[72px] max-1025:px-[60px] max-769:px-[0] max-600:px-[0]'>
                        <div className='text-center'>
                            <span className='leading-[150%] text-green1920 font-semibold text-[20px] max-1041:text-orange1040'>News & Events</span>
                            <h1 className='leading-[120%]  text-[#4F4F4F] font-bold text-[32px] pt-[15px] pb-[25px] max-600:text-[20px]'>Our Latest Updates</h1>
                            <p className='pb-[50px] text-[#5C5C5C] px-[298px] text-[16px] leading-[150%] max-1041:px-[75px] max-769:px-[12px] max-426:px-0 max-600:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum
                                gravida maecenas augue elementum et neque. Suspendisse imperdiet.</p>
                        </div>
                        <div className=' flex justify-center flex-wrap'>
                            <div className="relative m-[12px]   ">
                                <div className='relative'>
                                    <img className='  w-[270px] h-[270px] max-376:w-[300px] max-376:h-[300px] max-321:w-[272px] max-321:h-[272px] rounded-[5px]' src={blog1} alt="Your Image" />
                                    <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0000001B] to-[#000000B2] rounded-[5px]'></div>
                                </div>
                                <div className=" m-[20px]   absolute bottom-0 left-0  ">
                                    <p className="bg-[#21B477] p-[5px] rounded-[4px] w-[90px] text-white text-[16px] te font-bold leading-[150%] ">Marketing</p>
                                    <p className=" pt-[10px] pb-[8px] text-white text-[22px] font-bold leading-[120%] max-600:text-[16px] max-1025:text-[16px]">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit.</p>
                                    <p className='flex'>
                                        <img className='w-[20px]' src={day} alt="" />
                                        <span className='pl-[5px] text-white text-[16px] font-normal leading-[150%]'>Jun 15, 2022</span>
                                    </p>
                                </div>
                            </div>
                            <div className="relative m-[12px] ">
                                <div className='relative'>
                                    <img className=' w-[270px] h-[270px] max-376:w-[300px] max-376:h-[300px] max-321:w-[272px] max-321:h-[272px] rounded-[5px]' src={blog2} alt="Your Image" />
                                    <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0000001B] to-[#000000B2] rounded-[5px]'></div>
                                </div>
                                <div className="p-[20px] absolute bottom-0 left-0  ">
                                    <p className="bg-[#21B477] p-[5px] rounded-[4px] w-[90px] text-white text-[16px] text-center font-bold leading-[150%] ">Sales</p>
                                    <p className=" pt-[10px] pb-[8px] text-white text-[22px] font-bold leading-[120%] max-600:text-[16px] max-1025:text-[16px]">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit.</p>
                                    <p className='flex'>
                                        <img className='w-[20px]' src={day} alt="" />
                                        <span className='pl-[5px] text-white text-[16px] font-normal leading-[150%]'>Jun 15, 2022</span>
                                    </p>
                                </div>
                            </div>
                            <div className="relative m-[12px] ">
                                <div className='relative'>
                                    <img className=' w-[270px] h-[270px] max-376:w-[300px] max-376:h-[300px] max-321:w-[272px] max-321:h-[272px] rounded-[5px]' src={blog3} alt="Your Image" />
                                    <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0000001B] to-[#000000B2] rounded-[5px]'></div>
                                </div>
                                <div className="p-[20px] absolute bottom-0 left-0  ">
                                    <p className="bg-[#21B477] p-[5px] rounded-[4px] w-[90px] text-white text-[16px] text-center font-bold leading-[150%] ">Marketing</p>
                                    <p className=" pt-[10px] pb-[8px] text-white text-[22px] font-bold leading-[120%] max-600:text-[16px] max-1025:text-[16px]">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit.</p>
                                    <p className='flex'>
                                        <img className='w-[20px]' src={day} alt="" />
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
                    <div className='px-[300px] py-[60px] max-426:pt-[20px] max-600:pb-[60px]  max-1618:px-[72px]  max-1025:px-[60px] max-600:px-[0]'>
                        <div className=' grid grid-cols-6 max-768:grid-cols-2 max-768:grid-rows-2 max-460:grid-cols-1 '>
                            <div className='p-[12px] col-span-2 max-768:grid-cols-1 max-768:grid-rows-1 max-768:col-span-1   '>
                                <img className='w-[50%] max-460:mx-auto max-1441:ml-[10px] max-1025:ml-[25px] max-769:ml-[30px]' src={logo} alt="" />
                                <p className='ml-[5px] pl-[40px] w-[75%] max-460:pl-0  max-460:w-[100%]'>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Ut consequat mauris Lorem
                                    ipsum dolor sit amet, consectetur adipiscing
                                    elit. Ut consequat mauris</p>
                                <div className='ml-[5px] flex pl-[40px] pt-[20px]  max-460:pl-0'>
                                    <img className=' pr-[15px]' src={round} alt="" />
                                    <img className=' pr-[15px]' src={round} alt="" />
                                    <img className=' pr-[15px]' src={round} alt="" />
                                    <img className=' pr-[15px]' src={round} alt="" />
                                </div>
                            </div>
                            <div className='p-[12px] grid-cols-1 max-768:grid-cols-1 max-768:grid-rows-1 '>
                                <h1 className='text-[#392C7D] leading-[120%] font-bold text-[18px] pb-[26px]'>For Instructor</h1>
                                <div className='pl-5 max-426:pl-0  '>
                                    <p className='text-[#000] leading-[150%] font-medium text-[15px] pb-[19px]'>Profile</p>
                                    <p className='text-[#000] leading-[150%] font-medium text-[15px] pb-[19px]'>Login</p>
                                    <p className='text-[#000] leading-[150%] font-medium text-[15px] pb-[19px]'>Register</p>
                                    <p className='text-[#000] leading-[150%] font-medium text-[15px] pb-[19px]'>Instructor</p>
                                    <p className='text-[#000] leading-[150%] font-medium text-[15px] pb-[19px]'>Dashboard</p>
                                </div>
                            </div>
                            <div className='p-[12px] grid-cols-1 max-768:grid-cols-1 max-768:grid-rows-1 '>
                                <h1 className='text-[#392C7D] leading-[120%] font-bold text-[18px] pb-[26px]'>For Student</h1>
                                <div className='pl-5 max-426:pl-0'>
                                    <p className='text-[#000] leading-[150%] font-medium text-[15px] pb-[19px]'>Profile</p>
                                    <p className='text-[#000] leading-[150%] font-medium text-[15px] pb-[19px]'>Login</p>
                                    <p className='text-[#000] leading-[150%] font-medium text-[15px] pb-[19px]'>Register</p>
                                    <p className='text-[#000] leading-[150%] font-medium text-[15px] pb-[19px]'>Student</p>
                                    <p className='text-[#000] leading-[150%] font-medium text-[15px] pb-[19px]'>Dashboard</p>
                                </div>
                            </div>
                            <div className='p-[12px] col-span-2 max-768:grid-cols-1 max-768:grid-rows-1 max-768:col-span-1'>
                                <h1 className='text-[#392C7D] leading-[120%] font-bold text-[18px] pb-[26px]'>Address</h1>
                                <div className='max-w-[232px] '>
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
                        <div className='text-center p-[60px] max-460:pt-[70px] max-768:p-[12px] max-460:flex-wrap 700:hidden '>
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
            </div>
        </div>

    );
};

export default DreamPage;