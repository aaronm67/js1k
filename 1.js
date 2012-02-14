Z=Function;

I=Z("H","M=document.createElement(H)");
J=Z("b.insertBefore(M,c)");

// initialize an empty multidimentional array of "height" tall into i"
q=Z("i=[];for(h=0;h<j;h++)i[h]=[]"); 

// "Draw"
//r=Z("for(H=0;H<j;H++)for(e=k;e--;){a.fillStyle=g[H][e]?'red':'#eee',a.font='25px Arial',a.fillText('♥',e*f+1,H*f+1)}");
r=Z("for(H=0;H<j;H++)for(e=k;e--;)a.fillStyle=g[H][e]?'red':'#eee',a.fillRect(e*f+1,H*f+1,f-1,f-1)");

F=Z("q();for(H=0;H<j;H++)for(e=0;e<k;e++){n=g[H][e]?-1:0;for(h=-1;2>h;h++)for(o=-1;2>o;o++)g[(j+(H+h))%j][(k+(e+o))%k]&&n++;g[H][e]?1<n&&4>n&&(i[H][e]=1):3==n&&(i[H][e]=1)}g=i;S[Q]=t+++'th Generation';r()");
// UPDATE();

// STOP()
G=Z("clearInterval(u)");
// Set timer for update();
L=Z('u=setInterval("F()",O),p=0');

O=99;
N="onmouseup";
l =innerWidth-O;
d =innerHeight-O;
// BOX_SIZE
f = ~~(d / 30);
// GRID_WIDTH
k = ~~(l / f);
// GRID_HEIGHT
j = ~~(d / f);
D=u=p=t=0;
E=1;

c.width = l;
c.height = d;

Q="textContent";

/*
I("h1");
M[Q] = "The Game of Life";
J();
*/

/*
I("br");
J();
*/

I("a");
S=M;
J();

I("br");
J();

I("a");
M[Q] = "Start/Stop";
J();

I("button");
M[Q]='_';
M[N]=V=Z("E=!E;E?L():G()");
V();
J();

I("a");
M[Q] = "Speed";
J();

I("input");
M.type="range";
M.max = 999;
M.value = O;
M.onchange = Z("O=M.value;E&&(G()||L())"); 
J();

c.onmousedown=Z("D=1;G()");

c.onmousemove = c[N]=Z("a","H=~~((a.pageY-c.offsetTop)/f);e=~~((a.pageX-c.offsetLeft)/f);/v/.test(a.type)?D?(p=1,D=0):1==p&&(g[H][e]=1):(p||(g[H][e]=!g[H][e]),D=p=0,E&&L());r()")

/*
c.onmousemove = c[N] = function(a) {
    H = ~~((a.pageY-c.offsetTop) /f); // y = Math.floor(offsetY / gridSize) 
    e = ~~((a.pageX-c.offsetLeft) / f); // x = Math.floor(offsetX / gridSize)
    // if (mousemove) {
    /v/.test(a.type) ? 
        //if (hasMousedDown) { isDragging = 1; hasMousedDown = 0; }
        D ? (p = 1, D = 0) 
        // else if (isDragging) { grid[x][y] = LIVE; }
        : 1 == p && (g[H][e] = 1) 
        // } else { 
        : (p || (g[H][e] = !g[H][e]),  // Toggle current square
                D = p = 0, // hasMousedDown = isDragging = FALSE;
            E && L() // Start timer (if needed)
        );
        // }
    r()
};*/
q();
g = i;
K[N]()
