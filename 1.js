Z=Function;

I=Z("H","return document.createElement(H)");
J=Z("H","b.appendChild(H)");
// initialize an empty multidimentional array of "height" tall into k"
q=Z("i=[];for(h=0;h<j;h++)i[h]=[]"); 

// "Draw"
//r=Z("for(H=0;H<j;H++)for(e=k;e--;){a.fillStyle=g[H][e]?'red':'#eee',a.font='25px Arial',a.fillText('♥',e*f+1,H*f+1)}");
r=Z("for(H=0;H<j;H++)for(e=k;e--;)a.fillStyle=g[H][e]?'red':'#eee',a.fillRect(e*f+1,H*f+1,f-1,f-1)");

// UPDATE();
F=Z("q();for(H=0;H<j;H++)for(e=0;e<k;e++){n=g[H][e]?-1:0;for(h=-1;2>h;h++)for(o=-1;2>o;o++)g[(j+(H+h))%j][(k+(e+o))%k]&&n++;g[H][e]?1<n&&4>n&&(i[H][e]=1):3==n&&(i[H][e]=1)}g=i;t++;r()");

// STOP()
G=Z("clearInterval(u)");
// Set timer for update();
l=Z('u=setInterval("F()",99),p=0,E=1');

N="onmouseup";
s =innerWidth;
m =innerHeight;
l =s-99;
d =m-200;
// BOX_SIZE
f = ~~(d / 30);
// GRID_WIDTH
k = ~~(l / f);
// GRID_HEIGHT
j = ~~(d / f);
D=u=E=p=t=0;

c.width = l;
c.height = d;

M=I("a");
M.innerText = "test";
M[N] = function() { alert("hi there"); }
J(M);

c.onmousedown=Z("D=1;G()");
c.onmousemove = c[N] = function(a) {
    H = ~~(a.offsetY / f); // y = Math.floor(offsetY / gridSize) 
    e = ~~(a.offsetX / f); // x = Math.floor(offsetX / gridSize)
    // if (mousemove) {
    /v/.test(a.type) ? 
        //if (hasMousedDown) { isDragging = 1; hasMousedDown = 0; }
        D ? (p = 1, D = 0) 
        // else if (isDragging) { grid[x][y] = LIVE; }
        : 1 == p && (g[H][e] = 1) 
        // } else { 
        : (p || (g[H][e] = !g[H][e]),  // Toggle current square
                D = p = 0, // hasMousedDown = isDragging = FALSE;
            l() // Draw();
        );
        // }
    r()
};
q();
g = i;
r()
