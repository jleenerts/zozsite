'use client';

import { useState } from 'react';

export function LikeButton({ className }: { className?: string }) {
     const [likes, setLikes] = useState(0);

     function handleClick() {
          setLikes(likes + 1);
     }
     
     return (
     <button onClick={handleClick} className={className}>Fake Likes ({likes})</button>
     );
}