_ = Function;
I = _("H", "M=document.createElement(H);b.insertBefore(M,c)");
q = _("i=[];for(h=j;h--;)i[h]=[]");
r = _("for(H=0;H<j;H++)for(e=k;e--;)a.fillStyle=g[H][e]?'red':'#eee',a.fillRect(e*f+1,H*f+1,f-1,f-1)");
F = _("q();for(H=0;H<j;H++)for(e=0;e<k;e++){n=g[H][e]?-1:0;for(h=-1;2>h;h++)for(o=-1;2>o;o++)g[(j+(H+h))%j][(k+(e+o))%-k]&&n++;g[H][e]?1<n&&4>n&&(i[H][e]=1):3==n&&(i[H][e]=1)}g=i;S[Q]='Gen '+t++;r()");
G = _("clearInterval(u)");
L = _("u=setInterval('F()',O),p=0");
Z = _("E=t=1;V[N]();q();F(g=i)");
O = 99;
N = "onmouseup";
c.width = l =  innerWidth - O;
c.height = d = innerHeight - 200;
f = ~~(d / 30);
k = ~~(l / f);
j = ~~(d / f);
D = u = p = 0;

Q = "textContent";
I("h3");
M[Q]= "Conway's Love-Life";
I("p");
S = M;
W = "button";
I(W);
V=M;
V[N]= _("E=!E;V[Q]=E?L()||'Stop':G()||'Go'");
I(W);
M[Q] = "Clear";
M[N] = _("Z()");
I("a");
M[Q] = "Speed";
I("input");
M.type = "range";
M.max = 500;
M.value = O;
M.onchange = _("O=M.value;E&&(G()||L())");
c.onmousedown = _("G(D=1)");
c.onmousemove = c[N] = _("a", "H=~~((a.pageY-c.offsetTop)/f);e=~~((a.pageX-c.offsetLeft)/f);/v/.test(a.type)?D?(p=1,D=0):1==p&&(g[H][e]=1):(p||(g[H][e]=!g[H][e]),D=p=0,E&&L());r()");
Z();
H = ~~(j/2-j/5);
h = ~~(k/2);
g[3+H][-1+h]=g[3+H][1+h]=g[4+H][-2+h]=g[4+H][2+h]=g[4+H][h]=g[5+H][-3+h]=g[5+H][3+h]=g[6+H][-2+h]=g[6+H][2+h]=g[7+H][-1+h]=g[7+H][1+h]=g[8+H][h]=1;
r()
