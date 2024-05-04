import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import HandIcon from '@mui/icons-material/WavingHand'; // Import waving hand icon

const Buttons = () => {
  return (
    <div className="flex flex-wrap mt-18 justify-content-start" style={{ backgroundColor: '#f0f8ff' }}> {/* Changed background color */}
      <div className="w-1/2 p-6">
        <h1 className="mb-4 text-3xl font-bold mb-10 text-left mt-10 flex items-center" style={{ color: '#007bff' }}> {/* Changed text color */}
          <span style={{ verticalAlign: 'middle', fontSize: '40px', lineHeight: '40px' }}>
            Hi&nbsp;
            <HandIcon sx={{ fontSize: 40, color: '#ffc107', transform: 'scaleX(-1)' }} /> {/* Changed hand icon color */}
            <br />
            I am Rozina, <br />
            Front-end Developer.
          </span>
        </h1>
        <p className="mb-20 text-left">
          Welcome to my portfolio! I specialize in front-end development, creating engaging digital experiences through clean code and modern design principles. Explore my work to see how I can bring your projects to life!
        </p>
        <div className="flex space-x-4 mb-4 mt-20">
          <Button variant="contained" className="mr-2" style={{ backgroundColor: '#007bff' }}>Hire Me</Button> {/* Changed button color */}
          <Button variant="outlined" style={{ color: '#007bff', borderColor: '#007bff' }}>See my Projects</Button> {/* Changed button color */}
        </div>
      </div>
      <div className="w-1/2 p-6 mt-10">
        <img src="https://img.freepik.com/free-photo/beautiful-young-woman-working-her-laptop-her-office-home_231208-13967.jpg?t=st=1714843135~exp=1714846735~hmac=ed38d54b6e131a0d6a757e8fcf1cb6cb3109204b4f54e372aedaece152e748a2&w=900" width="200px" alt="Image" className="w-full" />
      </div>
    </div>
  );
}

export default Buttons;
