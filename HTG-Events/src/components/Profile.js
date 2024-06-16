import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Profile.css';

const Profile = () => {

  //1st year
  const [showStu1year, setShowStu1year] = useState(false);
  const [showStuCS1, setShowStuCS1] = useState(false);
  const [showStuIT1, setShowStuIT1] = useState(false);
  const [showStuBT1, setShowStuBT1] = useState(false);
  const [showStuAG1, setShowStuAG1] = useState(false);
  const [showStuEE1, setShowStuEE1] = useState(false);
  const [showStuCE1, setShowStuCE1] = useState(false);
  const [showStuECE1, setShowStuECE1] = useState(false);
  const [showStuME1, setShowStuME1] = useState(false);
  //2nd year
  const [showStu2year, setShowStu2year] = useState(false);
  const [showStuCS2, setShowStuCS2] = useState(false);
  const [showStuIT2, setShowStuIT2] = useState(false);
  const [showStuBT2, setShowStuBT2] = useState(false);
  const [showStuAG2, setShowStuAG2] = useState(false);
  const [showStuEE2, setShowStuEE2] = useState(false);
  const [showStuCE2, setShowStuCE2] = useState(false);
  const [showStuECE2, setShowStuECE2] = useState(false);
  const [showStuME2, setShowStuME2] = useState(false);

  // 3rd year
  const [showStu3year, setShowStu3year] = useState(false);
  const [showStuCS3, setShowStuCS3] = useState(false);
  const [showStuIT3, setShowStuIT3] = useState(false);
  const [showStuBT3, setShowStuBT3] = useState(false);
  const [showStuAG3, setShowStuAG3] = useState(false);
  const [showStuEE3, setShowStuEE3] = useState(false);
  const [showStuCE3, setShowStuCE3] = useState(false);
  const [showStuECE3, setShowStuECE3] = useState(false);
  const [showStuME3, setShowStuME3] = useState(false);

  // 4th Year
  const [showStu4year, setShowStu4year] = useState(false);
  const [showStuCS4, setShowStuCS4] = useState(false);
  const [showStuIT4, setShowStuIT4] = useState(false);
  const [showStuBT4, setShowStuBT4] = useState(false);

  const [showStuAG4, setShowStuAG4] = useState(false);
  const [showStuEE4, setShowStuEE4] = useState(false);
  const [showStuCE4, setShowStuCE4] = useState(false);
  const [showStuECE4, setShowStuECE4] = useState(false);
  const [showStuME4, setShowStuME4] = useState(false);


  //onClick
  //cs-1st
  const [showPopup, setShowPopup] = useState(false);
  
  const stucs1 = async (item) => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    const rec = await fetch("http://localhost:5000/api/eventRegistration/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item })
    })
  }
  //IT-1st
  const stuit1 = async (item) => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    const rec = await fetch("http://localhost:5000/api/eventRegistration/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item })
    })
  }
  //bt-1st
  const stubt1 = async (item) => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    const rec = await fetch("http://localhost:5000/api/eventRegistration/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item })
    })
  }
  //AG-1st
  const stuag1 = async (item) => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    const rec = await fetch("http://localhost:5000/api/eventRegistration/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item })
    })
  }
  // CE-1st
  const stuce1 = async (item) => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    const rec = await fetch("http://localhost:5000/api/eventRegistration/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item })
    })
  }
  // EE1-1st
  const stuee1 = async (item) => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    const rec = await fetch("http://localhost:5000/api/eventRegistration/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item })
    })
  }
  // ECE-1st
  const stuece1 = async (item) => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    const rec = await fetch("http://localhost:5000/api/eventRegistration/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item })
    })
  }
  // ME-1st
  const stume1 = async (item) => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    const rec = await fetch("http://localhost:5000/api/eventRegistration/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item })
    })
  }


  // 2nd-Year-Accept Button
  //cs-2nd
  const stucs2 = async (item) => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    const rec = await fetch("http://localhost:5000/api/eventRegistration/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item })
    })
  }
  //IT-2nd
  const stuit2 = async (item) => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    const rec = await fetch("http://localhost:5000/api/eventRegistration/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item })
    })
  }
  //bt-2nd
  const stubt2 = async (item) => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    const rec = await fetch("http://localhost:5000/api/eventRegistration/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item })
    })
  }
  //AG-2nd
  const stuag2 = async (item) => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    const rec = await fetch("http://localhost:5000/api/eventRegistration/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item })
    })
  }
  // CE-2nd
  const stuce2 = async (item) => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    const rec = await fetch("http://localhost:5000/api/eventRegistration/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item })
    })
  }
  // EE1-2nd
  const stuee2 = async (item) => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    const rec = await fetch("http://localhost:5000/api/eventRegistration/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item })
    })
  }
  // ECE-2nd
  const stuece2 = async (item) => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    const rec = await fetch("http://localhost:5000/api/eventRegistration/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item })
    })
  }
  // ME-2nd
  const stume2 = async (item) => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    const rec = await fetch("http://localhost:5000/api/eventRegistration/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item })
    })
  }

  // 3rd-Year Accept button
  //cs-3rd
  const stucs3 = async (item) => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    const rec = await fetch("http://localhost:5000/api/eventRegistration/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item })
    })
  }
  //IT-3rd
  const stuit3 = async (item) => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    const rec = await fetch("http://localhost:5000/api/eventRegistration/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item })
    })
  }
  //bt-3rd
  const stubt3 = async (item) => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    const rec = await fetch("http://localhost:5000/api/eventRegistration/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item })
    })
  }
  //AG-3rd
  const stuag3 = async (item) => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    const rec = await fetch("http://localhost:5000/api/eventRegistration/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item })
    })
  }
  // CE-3rd
  const stuce3 = async (item) => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    const rec = await fetch("http://localhost:5000/api/eventRegistration/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item })
    })
  }
  // EE1-3rd
  const stuee3 = async (item) => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    const rec = await fetch("http://localhost:5000/api/eventRegistration/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item })
    })
  }
  // ECE-3rd
  const stuece3 = async (item) => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    const rec = await fetch("http://localhost:5000/api/eventRegistration/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item })
    })
  }
  // ME-3rd
  const stume3 = async (item) => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    const rec = await fetch("http://localhost:5000/api/eventRegistration/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item })
    })
  }

  // 4th-Year Accept Button

  //CS-4th Year
  const stucs4 = async (item) => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    const rec = await fetch("http://localhost:5000/api/eventRegistration/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item })
    })
  }
  //IT-4th
  const stuit4 = async (item) => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    const rec = await fetch("http://localhost:5000/api/eventRegistration/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item })
    })
  }
  //bt-4th
  const stubt4 = async (item) => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    const rec = await fetch("http://localhost:5000/api/eventRegistration/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item })
    })
  }
  //AG-4th
  const stuag4 = async (item) => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    const rec = await fetch("http://localhost:5000/api/eventRegistration/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item })
    })
  }
  // CE-4th
  const stuce4 = async (item) => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    const rec = await fetch("http://localhost:5000/api/eventRegistration/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item })
    })
  }
  // EE1-4th
  const stuee4 = async (item) => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    const rec = await fetch("http://localhost:5000/api/eventRegistration/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item })
    })
  }
  // ECE-4th
  const stuece4 = async (item) => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    const rec = await fetch("http://localhost:5000/api/eventRegistration/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item })
    })
  }
  // ME-4th
  const stume4 = async (item) => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
    const rec = await fetch("http://localhost:5000/api/eventRegistration/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item })
    })
  }




  // CS-1st
  const [stuCS1, setStuCS1] = useState([]);
  const getStuCS1 = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/eventRegistration/fetch1CS`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      setStuCS1(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getStuCS1();
  }, []);

  //IT-1st
  const [stuIT1, setStuIT1] = useState([]);
  const getStuIT1 = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/eventRegistration/fetch1IT`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      setStuIT1(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getStuIT1();
  }, []);

  //BT-1st
  const [stuBT1, setStuBT1] = useState([]);
  const getStuBT1 = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/eventRegistration/fetch1BT`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      setStuBT1(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getStuBT1();
  }, []);

  // AG-1st
  const [stuAG1, setStuAG1] = useState([]);
  const getStuAG1 = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/eventRegistration/fetch1AG`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      setStuAG1(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getStuAG1();
  }, []);

  //CE-1st
  const [stuCE1, setStuCE1] = useState([]);
  const getStuCE1 = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/eventRegistration/fetch1CE`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      setStuCE1(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getStuCE1();
  }, []);


  //EE-1st
  const [stuEE1, setStuEE1] = useState([]);
  const getStuEE1 = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/eventRegistration/fetch1EE`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      setStuEE1(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getStuEE1();
  }, []);

  //ECE-1st
  const [stuECE1, setStuECE1] = useState([]);
  const getStuECE1 = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/eventRegistration/fetch1ECE`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      setStuECE1(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getStuECE1();
  }, []);

  //ME-1st
  const [stuME1, setStuME1] = useState([]);
  const getStuME1 = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/eventRegistration/fetch1ME`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      setStuME1(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getStuME1();
  }, []);


  // CS-2nd
  const [stuCS2, setStuCS2] = useState([]);
  const getStuCS2 = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/eventRegistration/fetch2CS`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      setStuCS2(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getStuCS2();
  }, []);

  //IT-2nd
  const [stuIT2, setStuIT2] = useState([]);
  const getStuIT2 = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/eventRegistration/fetch2IT`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      setStuIT2(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getStuIT2();
  }, []);

  //BT-2nd
  const [stuBT2, setStuBT2] = useState([]);
  const getStuBT2 = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/eventRegistration/fetch2BT`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      setStuBT2(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getStuBT2();
  }, []);

  // AG-1st
  const [stuAG2, setStuAG2] = useState([]);
  const getStuAG2 = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/eventRegistration/fetch2AG`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      setStuAG2(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getStuAG2();
  }, []);

  //CE-2nd
  const [stuCE2, setStuCE2] = useState([]);
  const getStuCE2 = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/eventRegistration/fetch2CE`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      setStuCE2(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getStuCE2();
  }, []);


  //EE-2nd
  const [stuEE2, setStuEE2] = useState([]);
  const getStuEE2 = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/eventRegistration/fetch2EE`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      setStuEE2(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getStuEE2();
  }, []);

  //ECE-2nd
  const [stuECE2, setStuECE2] = useState([]);
  const getStuECE2 = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/eventRegistration/fetch2ECE`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      setStuECE2(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getStuECE2();
  }, []);

  //ME-2nd
  const [stuME2, setStuME2] = useState([]);
  const getStuME2 = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/eventRegistration/fetch2ME`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      setStuME2(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getStuME2();
  }, []);


  // CS-3rd
  const [stuCS3, setStuCS3] = useState([]);
  const getStuCS3 = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/eventRegistration/fetch3CS`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      setStuCS3(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getStuCS3();
  }, []);

  //IT-2nd
  const [stuIT3, setStuIT3] = useState([]);
  const getStuIT3 = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/eventRegistration/fetch3IT`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      setStuIT2(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getStuIT3();
  }, []);

  //BT-3rd
  const [stuBT3, setStuBT3] = useState([]);
  const getStuBT3 = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/eventRegistration/fetch3BT`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      setStuBT3(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getStuBT3();
  }, []);

  // AG-3rd
  const [stuAG3, setStuAG3] = useState([]);
  const getStuAG3 = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/eventRegistration/fetch3AG`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      setStuAG3(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getStuAG3();
  }, []);

  //CE-2nd
  const [stuCE3, setStuCE3] = useState([]);
  const getStuCE3 = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/eventRegistration/fetch3CE`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      setStuCE3(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getStuCE3();
  }, []);


  //EE-3rd
  const [stuEE3, setStuEE3] = useState([]);
  const getStuEE3 = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/eventRegistration/fetch3EE`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      setStuEE3(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getStuEE3();
  }, []);

  //ECE-3rd
  const [stuECE3, setStuECE3] = useState([]);
  const getStuECE3 = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/eventRegistration/fetch3ECE`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      setStuECE3(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getStuECE3();
  }, []);

  //ME-3rd
  const [stuME3, setStuME3] = useState([]);
  const getStuME3 = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/eventRegistration/fetch3ME`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      setStuME3(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getStuME3();
  }, []);

  // CS-4th
  const [stuCS4, setStuCS4] = useState([]);
  const getStuCS4 = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/eventRegistration/fetch4CS`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      setStuCS4(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getStuCS4();
  }, []);

  //IT-4th
  const [stuIT4, setStuIT4] = useState([]);
  const getStuIT4 = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/eventRegistration/fetch4IT`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      setStuIT4(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getStuIT4();
  }, []);

  //BT-4th
  const [stuBT4, setStuBT4] = useState([]);
  const getStuBT4 = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/eventRegistration/fetch4BT`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      setStuBT4(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getStuBT4();
  }, []);

  // AG-4th
  const [stuAG4, setStuAG4] = useState([]);
  const getStuAG4 = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/eventRegistration/fetch4AG`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      setStuAG4(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getStuAG4();
  }, []);

  //CE-4th
  const [stuCE4, setStuCE4] = useState([]);
  const getStuCE4 = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/eventRegistration/fetch4CE`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      setStuCE4(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getStuCE4();
  }, []);


  //EE-4th
  const [stuEE4, setStuEE4] = useState([]);
  const getStuEE4 = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/eventRegistration/fetch4EE`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      setStuEE4(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getStuEE4();
  }, []);

  //ECE-4th
  const [stuECE4, setStuECE4] = useState([]);
  const getStuECE4 = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/eventRegistration/fetch4ECE`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      setStuECE4(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getStuECE4();
  }, []);

  //ME-4th
  const [stuME4, setStuME4] = useState([]);
  const getStuME4 = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/eventRegistration/fetch4ME`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      setStuME4(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getStuME4();
  }, []);


  return (
    <div>
      <div className='profile'>
        <div className='admin'>
          <h1 className='heading'>Admin Dashboard</h1>
        </div>
        {showPopup && <div className="popup"><span className='tick'>✅</span>Request is Accepted.</div>}
        <br />
        {/* 1st Year students */}
        <button className='stu1year' onClick={() => setShowStu1year(!showStu1year)}>1st Year Students
        </button>
        {showStu1year && (
          <div className='1st-year-student'>
            {/* CSE-1st */}
            <div>
              <button className='stuCS4' onClick={() => setShowStuCS1(!showStuCS1)}>Computer Science-1st Year
              </button>
              {showStuCS1 && (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stuCS1.map((item) => (
                        <tr key={item._id}>
                          <td>{item.studentname}</td>
                          <td>{item.studentemail}</td>
                          <td>

                            <button className={`button accept`} onClick={() => { stucs1(item._id) }}>Accept</button>
                      
                              <button className='button reject' onClick={() => console.log('Rejected')}>Reject</button>
                          
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                </div>
              )}
            </div>

            {/* IT-1st */}
            <div>
              <button className='stuCS4' onClick={() => setShowStuIT1(!showStuIT1)}>Information Technology-1st Year</button>
              {showStuIT1 && (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stuIT1.map((item) => (
                        <tr key={item._id}>
                          <td>{item.studentname}</td>
                          <td>{item.studentemail}</td>
                          <td>
                            <button className="button accept" onClick={() => { stuit1(item._id) }}>Accept</button>
                            <button className='button reject'>Reject</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                </div>
              )}
            </div>

            {/* BT-1st */}
            <div>
              <button className='stuCS4' onClick={() => setShowStuBT1(!showStuBT1)}>Bio Technology-1st Year</button>
              {showStuBT1 && (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stuBT1.map((item) => (
                        <tr key={item._id}>
                          <td>{item.studentname}</td>
                          <td>{item.studentemail}</td>
                          <td>
                            <button className="button accept" onClick={() => { stubt1(item._id) }}>Accept</button>
                            <button className='button reject'>Reject</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                </div>
              )}
            </div>

            {/* AG-1st */}
            <div>
              <button className='stuCS4' onClick={() => setShowStuAG1(!showStuAG1)}>Agriculture-1st Year</button>
              {showStuAG1 && (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stuAG1.map((item) => (
                        <tr key={item._id}>
                          <td>{item.studentname}</td>
                          <td>{item.studentemail}</td>
                          <td>
                            <button className="button accept" onClick={() => { stuag1(item._id) }}>Accept</button>
                            <button className='button reject'>Reject</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                </div>
              )}
            </div>

            {/* CE-1st */}
            <div>
              <button className='stuCS4' onClick={() => setShowStuCE1(!showStuCE1)}>Civil Engineering-1st Year</button>
              {showStuCE1 && (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stuCE1.map((item) => (
                        <tr key={item._id}>
                          <td>{item.studentname}</td>
                          <td>{item.studentemail}</td>
                          <td>
                            <button className="button accept" onClick={() => { stuce1(item._id) }}>Accept</button>
                            <button className='button reject'>Reject</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                </div>
              )}
            </div>

            {/* EE-1st */}
            <div>
              <button className='stuCS4' onClick={() => setShowStuEE1(!showStuEE1)}>Electrical Engineering-1st Year</button>
              {showStuEE1 && (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stuEE1.map((item) => (
                        <tr key={item._id}>
                          <td>{item.studentname}</td>
                          <td>{item.studentemail}</td>
                          <td>
                            <button className="button accept" onClick={() => { stuee1(item._id) }}>Accept</button>
                            <button className='button reject'>Reject</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                </div>
              )}
            </div>

            {/* ECE-1st */}
            <div>
              <button className='stuCS4' onClick={() => setShowStuECE1(!showStuECE1)}>Electronic Communication  Engineering-1st Year</button>
              {showStuECE1 && (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stuECE1.map((item) => (
                        <tr key={item._id}>
                          <td>{item.studentname}</td>
                          <td>{item.studentemail}</td>
                          <td>
                            <button className="button accept" onClick={() => { stuece1(item._id) }}>Accept</button>
                            <button className='button reject'>Reject</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                </div>
              )}
            </div>

            {/* ME-1st */}
            <div>
              <button className='stuCS4' onClick={() => setShowStuME1(!showStuME1)}>Mechanical Engineering-1st Year</button>
              {showStuME1 && (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stuME1.map((item) => (
                        <tr key={item._id}>
                          <td>{item.studentname}</td>
                          <td>{item.studentemail}</td>
                          <td>
                            <button className="button accept" onClick={() => { stume1(item._id) }}>Accept</button>
                            <button className='button reject'>Reject</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                </div>
              )}
            </div>
          </div>
        )}

        {/* 2nd-Year Students */}
        <button className='stu1year' onClick={() => setShowStu2year(!showStu2year)}>2nd Year Students
        </button>
        {showStu2year && (
          <div className='1st-year-student'>
            {/* CSE-1st */}
            <div>
              <button className='stuCS4' onClick={() => setShowStuCS2(!showStuCS2)}>Computer Science-2nd Year
              </button>
              {showStuCS2 && (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stuCS2.map((item) => (
                        <tr key={item._id}>
                          <td>{item.studentname}</td>
                          <td>{item.studentemail}</td>
                          <td>
                            <button className="button accept" onClick={() => { stucs2(item._id) }}>Accept</button>
                            <button className='button reject'>Reject</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                </div>
              )}
            </div>

            {/* IT-1st */}
            <div>
              <button className='stuCS4' onClick={() => setShowStuIT2(!showStuIT2)}>Information Technology-2nd Year</button>
              {showStuIT2 && (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stuIT2.map((item) => (
                        <tr key={item._id}>
                          <td>{item.studentname}</td>
                          <td>{item.studentemail}</td>
                          <td>
                            <button className="button accept" onClick={() => { stuit2(item._id) }}>Accept</button>
                            <button className='button reject'>Reject</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                </div>
              )}
            </div>

            {/* BT-1st */}
            <div>
              <button className='stuCS4' onClick={() => setShowStuBT2(!showStuBT2)}>Bio Technology-2nd Year</button>
              {showStuBT2 && (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stuBT2.map((item) => (
                        <tr key={item._id}>
                          <td>{item.studentname}</td>
                          <td>{item.studentemail}</td>
                          <td>
                            <button className="button accept" onClick={() => { stubt2(item._id) }}>Accept</button>
                            <button className='button reject'>Reject</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                </div>
              )}
            </div>

            {/* AG-1st */}
            <div>
              <button className='stuCS4' onClick={() => setShowStuAG2(!showStuAG2)}>Agriculture-2nd Year</button>
              {showStuAG2 && (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stuAG2.map((item) => (
                        <tr key={item._id}>
                          <td>{item.studentname}</td>
                          <td>{item.studentemail}</td>
                          <td>
                            <button className="button accept" onClick={() => { stuag2(item._id) }}>Accept</button>
                            <button className='button reject'>Reject</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                </div>
              )}
            </div>

            {/* CE-1st */}
            <div>
              <button className='stuCS4' onClick={() => setShowStuCE2(!showStuCE2)}>Civil Engineering-2nd Year</button>
              {showStuCE2 && (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stuCE2.map((item) => (
                        <tr key={item._id}>
                          <td>{item.studentname}</td>
                          <td>{item.studentemail}</td>
                          <td>
                            <button className="button accept" onClick={() => { stuce2(item._id) }}>Accept</button>
                            <button className='button reject'>Reject</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                </div>
              )}
            </div>

            {/* EE-1st */}
            <div>
              <button className='stuCS4' onClick={() => setShowStuEE2(!showStuEE2)}>Electrical Engineering-2nd Year</button>
              {showStuEE2 && (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stuEE2.map((item) => (
                        <tr key={item._id}>
                          <td>{item.studentname}</td>
                          <td>{item.studentemail}</td>
                          <td>
                            <button className="button accept" onClick={() => { stuee2(item._id) }}>Accept</button>
                            <button className='button reject'>Reject</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                </div>
              )}
            </div>

            {/* ECE-1st */}
            <div>
              <button className='stuCS4' onClick={() => setShowStuECE2(!showStuECE2)}>Electronic Communication  Engineering-2nd Year</button>
              {showStuECE2 && (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stuECE2.map((item) => (
                        <tr key={item._id}>
                          <td>{item.studentname}</td>
                          <td>{item.studentemail}</td>
                          <td>
                            <button className="button accept" onClick={() => { stuece2(item._id) }}>Accept</button>
                            <button className='button reject'>Reject</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                </div>
              )}
            </div>

            {/* ME-1st */}
            <div>
              <button className='stuCS4' onClick={() => setShowStuME2(!showStuME2)}>Mechanical Engineering-2nd Year</button>
              {showStuME2 && (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stuME2.map((item) => (
                        <tr key={item._id}>
                          <td>{item.studentname}</td>
                          <td>{item.studentemail}</td>
                          <td>
                            <button className="button accept" onClick={() => { stume2(item._id) }}>Accept</button>
                            <button className='button reject'>Reject</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                </div>
              )}
            </div>
          </div>
        )}

        {/* 3rd-Year Students */}
        <button className='stu1year' onClick={() => setShowStu3year(!showStu3year)}>3rd Year Students
        </button>
        {showStu3year && (
          <div className='1st-year-student'>
            {/* CSE-1st */}
            <div>
              <button className='stuCS4' onClick={() => setShowStuCS3(!showStuCS3)}>Computer Science-3rd Year
              </button>
              {showStuCS3 && (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stuCS3.map((item) => (
                        <tr key={item._id}>
                          <td>{item.studentname}</td>
                          <td>{item.studentemail}</td>
                          <td>
                            <button className="button accept" onClick={() => { stucs3(item._id) }}>Accept</button>
                            <button className='button reject'>Reject</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                </div>
              )}
            </div>

            {/* IT-1st */}
            <div>
              <button className='stuCS4' onClick={() => setShowStuIT3(!showStuIT3)}>Information Technology-3rd Year</button>
              {showStuIT3 && (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stuIT3.map((item) => (
                        <tr key={item._id}>
                          <td>{item.studentname}</td>
                          <td>{item.studentemail}</td>
                          <td>
                            <button className="button accept" onClick={() => { stuit3(item._id) }}>Accept</button>
                            <button className='button reject'>Reject</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                </div>
              )}
            </div>

            {/* BT-1st */}
            <div>
              <button className='stuCS4' onClick={() => setShowStuBT3(!showStuBT3)}>Bio Technology-3rd Year</button>
              {showStuBT3 && (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stuBT3.map((item) => (
                        <tr key={item._id}>
                          <td>{item.studentname}</td>
                          <td>{item.studentemail}</td>
                          <td>
                            <button className="button accept" onClick={() => { stubt3(item._id) }}>Accept</button>
                            <button className='button reject'>Reject</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                </div>
              )}
            </div>

            {/* AG-1st */}
            <div>
              <button className='stuCS4' onClick={() => setShowStuAG3(!showStuAG3)}>Agriculture-3rd Year</button>
              {showStuAG3 && (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stuAG3.map((item) => (
                        <tr key={item._id}>
                          <td>{item.studentname}</td>
                          <td>{item.studentemail}</td>
                          <td>
                            <button className="button accept" onClick={() => { stuag3(item._id) }}>Accept</button>
                            <button className='button reject'>Reject</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                </div>
              )}
            </div>

            {/* CE-1st */}
            <div>
              <button className='stuCS4' onClick={() => setShowStuCE3(!showStuCE3)}>Civil Engineering-3rd Year</button>
              {showStuCE3 && (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stuCE3.map((item) => (
                        <tr key={item._id}>
                          <td>{item.studentname}</td>
                          <td>{item.studentemail}</td>
                          <td>
                            <button className="button accept" onClick={() => { stuce3(item._id) }}>Accept</button>
                            <button className='button reject'>Reject</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                </div>
              )}
            </div>

            {/* EE-1st */}
            <div>
              <button className='stuCS4' onClick={() => setShowStuEE3(!showStuEE3)}>Electrical Engineering-3rd Year</button>
              {showStuEE3 && (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stuEE3.map((item) => (
                        <tr key={item._id}>
                          <td>{item.studentname}</td>
                          <td>{item.studentemail}</td>
                          <td>
                            <button className="button accept" onClick={() => { stuee3(item._id) }}>Accept</button>
                            <button className='button reject'>Reject</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                </div>
              )}
            </div>

            {/* ECE-1st */}
            <div>
              <button className='stuCS4' onClick={() => setShowStuECE3(!showStuECE3)}>Electronic Communication  Engineering-3rd Year</button>
              {showStuECE3 && (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stuECE3.map((item) => (
                        <tr key={item._id}>
                          <td>{item.studentname}</td>
                          <td>{item.studentemail}</td>
                          <td>
                            <button className="button accept" onClick={() => { stuece3(item._id) }}>Accept</button>
                            <button className='button reject'>Reject</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                </div>
              )}
            </div>

            {/* ME-1st */}
            <div>
              <button className='stuCS4' onClick={() => setShowStuME3(!showStuME3)}>Mechanical Engineering-3rd Year</button>
              {showStuME3 && (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stuME3.map((item) => (
                        <tr key={item._id}>
                          <td>{item.studentname}</td>
                          <td>{item.studentemail}</td>
                          <td>
                            <button className="button accept" onClick={() => { stume3(item._id) }}>Accept</button>
                            <button className='button reject'>Reject</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                </div>
              )}
            </div>
          </div>
        )}


        {/* 4th-Year Students */}
        <button className='stu1year' onClick={() => setShowStu4year(!showStu4year)}>4th Year Students
        </button>
        {showStu4year && (
          <div className='1st-year-student'>
            {/* CSE-1st */}
            <div>
              <button className='stuCS4' onClick={() => setShowStuCS4(!showStuCS4)}>Computer Science-4th Year
              </button>
              {showStuCS4 && (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stuCS4.map((item) => (
                        <tr key={item._id}>
                          <td>{item.studentname}</td>
                          <td>{item.studentemail}</td>
                          <td>
                            <button className="button accept" onClick={() => { stucs4(item._id) }}>Accept</button>
                            <button className='button reject'>Reject</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                </div>
              )}
            </div>

            {/* IT-1st */}
            <div>
              <button className='stuCS4' onClick={() => setShowStuIT4(!showStuIT4)}>Information Technology-4th Year</button>
              {showStuIT4 && (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stuIT4.map((item) => (
                        <tr key={item._id}>
                          <td>{item.studentname}</td>
                          <td>{item.studentemail}</td>
                          <td>
                            <button className="button accept" onClick={() => { stuit4(item._id) }}>Accept</button>
                            <button className='button reject'>Reject</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                </div>
              )}
            </div>

            {/* BT-1st */}
            <div>
              <button className='stuCS4' onClick={() => setShowStuBT4(!showStuBT4)}>Bio Technology-4th Year</button>
              {showStuBT4 && (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stuBT4.map((item) => (
                        <tr key={item._id}>
                          <td>{item.studentname}</td>
                          <td>{item.studentemail}</td>
                          <td>
                            <button className="button accept" onClick={() => { stubt4(item._id) }}>Accept</button>
                            <button className='button reject'>Reject</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                </div>
              )}
            </div>

            {/* AG-1st */}
            <div>
              <button className='stuCS4' onClick={() => setShowStuAG4(!showStuAG4)}>Agriculture-4th Year</button>
              {showStuAG4 && (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stuAG4.map((item) => (
                        <tr key={item._id}>
                          <td>{item.studentname}</td>
                          <td>{item.studentemail}</td>
                          <td>
                            <button className="button accept" onClick={() => { stuag4(item._id) }}>Accept</button>
                            <button className='button reject'>Reject</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                </div>
              )}
            </div>

            {/* CE-1st */}
            <div>
              <button className='stuCS4' onClick={() => setShowStuCE4(!showStuCE4)}>Civil Engineering-4th Year</button>
              {showStuCE4 && (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stuCE4.map((item) => (
                        <tr key={item._id}>
                          <td>{item.studentname}</td>
                          <td>{item.studentemail}</td>
                          <td>
                            <button className="button accept" onClick={() => { stuce4(item._id) }}>Accept</button>
                            <button className='button reject'>Reject</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                </div>
              )}
            </div>

            {/* EE-1st */}
            <div>
              <button className='stuCS4' onClick={() => setShowStuEE4(!showStuEE4)}>Electrical Engineering-4th Year</button>
              {showStuEE4 && (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stuEE4.map((item) => (
                        <tr key={item._id}>
                          <td>{item.studentname}</td>
                          <td>{item.studentemail}</td>
                          <td>
                            <button className="button accept" onClick={() => { stuee4(item._id) }}>Accept</button>
                            <button className='button reject'>Reject</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                </div>
              )}
            </div>

            {/* ECE-1st */}
            <div>
              <button className='stuCS4' onClick={() => setShowStuECE4(!showStuECE4)}>Electronic Communication  Engineering-4th Year</button>
              {showStuECE4 && (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stuECE4.map((item) => (
                        <tr key={item._id}>
                          <td>{item.studentname}</td>
                          <td>{item.studentemail}</td>
                          <td>
                            <button className="button accept" onClick={() => { stuece4(item._id) }}>Accept</button>
                            <button className='button reject'>Reject</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                </div>
              )}
            </div>

            {/* ME-4th year */}
            <div>
              <button className='stuCS4' onClick={() => setShowStuME4(!showStuME4)}>Mechanical Engineering-4th Year</button>
              {showStuME4 && (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stuME4.map((item) => (
                        <tr key={item._id}>
                          <td>{item.studentname}</td>
                          <td>{item.studentemail}</td>
                          <td>
                            <button className="button accept" onClick={() => { stume4(item._id) }}>Accept</button>
                            <button className='button reject'>Reject</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Profile;
