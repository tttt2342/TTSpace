---
layout: post
title: Bose-Einstein Condensation
date: 2024-12-26 10:00:00+0800
description: Statistical Mechanics Notes 
tags: StatisticalMechanics
related_posts: false
---

##### EOS of Ideal Bose Gas
The equation of state of Bose gas is
\begin{equation}
\frac{P}{k_B T} = \frac{1}{\lambda^3} g_{5/2}(z)-\frac{1}{V}\ln (1-z)
\end{equation}
\begin{equation}
\label{f3}
\frac{1}{v} = \frac{1}{\lambda^3} g_{3/2}(z) + \frac{1}{V}\frac{z}{1-z}
\end{equation}
where $$v=\frac{V}{N}$$, $$\lambda = \sqrt{\frac{2\pi \hbar^2}{mk_B T}}$$. In formula \eqref{f3}, the function $$g_{3/2}(z)$$ is
\begin{equation}
g_{3/2}(z)=\sum_{l=1}^{\infty} \frac{z^l}{l^{3/2}}
\end{equation}
For small $$z$$ it can be written into:
\begin{equation}
g_{3/2}(z)=z+\frac{z^2}{2^{3/2} +\frac{z^3}{3^{3/2}}+\cdot \cdot \cdot}
\end{equation}
When $$z = 1$$, its differential is divergent, while itself convergent to
\begin{equation}
g_{3/2}(1)=\sum_{l=1}^{\infty} \frac{1}{l^{3/2}} = \zeta (3/2) = 2.612\cdot \cdot \cdot
\end{equation}
Thus for all $$0 < z < 1$$, we have
\begin{equation}
g_{3/2}(z)<2.612\cdot\cdot\cdot
\end{equation}
##### Conditions of Bose-Einstein Condensation
We can rewrite the formula \eqref{f3}:
\begin{equation}
\label{f4}
\lambda^3 \frac{\langle n_0 \rangle}{V} = \frac{\lambda^3}{v} - g_{3/2}(z)
\end{equation}
where $$\langle n_0 \rangle = \frac{z}{1-z}$$ which represent the average occupation number of 0 momentum particles.

The formula \eqref{f4} means that if the temperature and specific volume meet:
\begin{equation}
\label{condition}
\frac{\lambda^3}{v}>g_{3/2}(1)
\end{equation}
we have
\begin{equation}
\frac{\langle n_0 \rangle}{V}>0
\end{equation}
which means BEC occurs. So the formula \eqref{condition} is the condition of BEC.

If the specific volume is fixed, we have the critical temperature $$T_c$$:
\begin{equation}
k_B T_c=\frac{2\pi\hbar^2}{m[vg_{3/2}(1)]^{2/3}}
\end{equation}

If the temperature is fixed, we have the critical specific volume $$v_c$$:
\begin{equation}
v_c=\frac{\lambda^3}{g_{3/2}(1)}
\end{equation}
BEC only happens in systems that have high density and low temperature.
##### Fugacity
From figure we can know that $$z=1$$ for all $$\frac{\lambda^3}{v}>g_{3/2}(1)$$.
When $$V \to \infty$$, the fugacity meet:
\begin{equation}
z=1\text{,    }(\frac{\lambda^3}{v}>g_{3/2}(1))
\end{equation}
\begin{equation}
\label{f5}
g_{3/2}(z) = \frac{\lambda^3}{v} \text{,    }(\frac{\lambda^3}{v}<g_{3/2}(1))
\end{equation}

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/8.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
</div>
<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/10.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
</div>

##### Occupation number
From equation \eqref{f5}, we can write the relation between $$\frac{\langle n_0 \rangle}{N}$$ and Temperature or specific volume.
\begin{equation}
\frac{\langle n_0\rangle}{N} = 1-(\frac{T}{T_c})^{3/2} = 1-\frac{v}{v_c}\text{,    }(\frac{\lambda^3}{v}>g_{3/2}(1))
\end{equation}
\begin{equation}
\frac{\langle n_0\rangle}{N} = 0\text{,    }(\frac{\lambda^3}{v}<g_{3/2}(1))
\end{equation}
The partition of particles with $$p=0$$ is showed in the figure.
