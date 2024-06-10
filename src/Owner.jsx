// src/Owner.jsx
import React from 'react';

const Owner = () => {
  return (
    <div className='p-4 flex items-center flex-col gap-2 bg-slate-400 h-screen'>
        <h1 className='text-xl font-bold'>Noey - Group B - 33</h1>
        <img className = 'w-64' src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/08/hello-world.png"></img>
        <h2 className='font-bold'>Short Biography:</h2>
        <p className='px-20'>Meet a curious soul, born with a book in hand and a mind full of wonder. From childhood adventures to adult aspirations, this individual is on a quest for stories and experiences that fuel their imagination and inspire others to chase their dreams. Along the journey, they've delved into the world of coding, immersing themselves in learning React and honing their skills in a junior developer bootcamp. With each line of code and every challenge overcome, they're crafting a path towards a future where creativity and technology intertwine to shape new possibilities..</p>
    </div>
  );
};

export default Owner;
