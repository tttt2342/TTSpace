---
layout: post
title: Scattering
date: 2025-01-02 12:12:00+0800
description: Quantum Mechanics Notes 
tags: 
categories: QuantumMechanics
related_posts: false
---

### Scattering Theory
#### Classical Scattering Theory
Consider a single incident particle with energy $$E$$, collision parameter $$b$$, and exit with angle $$\theta$$. The basic question of classical scattering theory is to calculate scattering angle with collision parameter.\
Generally, incident particles into a cross section area $$d\sigma$$ would be scattered into a solid angle $$d\Omega$$. The ratio, $$D(\theta) = d\sigma/d\Omega$$, is call the **differential cross section**.

Using the collision parameter, $$d\sigma = bdbd\phi, d\Omega=\sin \theta d\theta d\phi$$, so,
\begin{equation}
D(\theta) = \frac{b}{\sin\theta}|\frac{db}{d\theta}|
\end{equation}
The **total cross section** is the integral to solid angle:
\begin{equation}
\sigma = \int D(\theta) d\Omega
\end{equation}

#### Quantum Scattering Theory
We consider an incident plane wave, $$\psi(z)= Ae^{ikz}$$, along $$z$$ direction, which meets a scattering potential and produce a spherical wave outwards. So we need to find the solution to the Schrodinger equation with following form:
\begin{equation}
\psi(r,\theta) \approx A\lbrace e^{ikz}+f(\theta)\frac{e^{ikr}}{r}\rbrace 
\end{equation}
for large $$r$$, where the wave number $$k=\frac{\sqrt{2mE}}{\hbar}$$.
So the question is to find the scattering amplitude $$f(\theta)$$, which gives the scatter probability in $$\theta$$ direction in order to calculate cross section.
\begin{equation}
D(\theta) = \frac{d\sigma}{d\Omega}=|f(\theta)|^2
\end{equation}
We have two methods to calculate the scattering amplitude: sub-wave method and Born approximation.
### Sub-wave Method
Under spherically symmetric potential, the solution to TISE is:
\begin{equation}
\psi(r,\theta,\phi)=R(r)Y_l^m(\theta,\phi)
\end{equation}
where $$Y_l^m$$ is the spherical harmonic function, and $$u(r)=rR(r)$$ obeys the radical equation:
\begin{equation}
-\frac{\hbar^2}{2m}\frac{d^2 u}{dr^2}+[V(r)+\frac{\hbar^2}{2m}\frac{l(l+1)}{r^2}]u = Eu
\end{equation}
#### Radiation Zone
For large $$r (kr>>1)$$ the potential $$V\to 0$$ and centrifugal term is ignorable, the equation becomes:
\begin{equation}
\frac{d^u}{dr^2}\approx -k^2 u
\end{equation}
with general solution:
\begin{equation}
u(r) = Ce^{ikr}+De^{-ikr}
\end{equation}
As we want to find scattered wave, we require $$D=0$$. So for large $$r$$:
\begin{equation}
R(r) ~ \frac{e^{ikr}}{r}
\end{equation}
#### Middle Region
In the middle region (where $$V$$ is ignorable but the centrifugal term is not), the radical equation becomes:
\begin{equation}
\frac{d^2 u}{dr^2}-\frac{l(l+1)}{r^2}u=-k^2 u
\end{equation}
whose general solution is the combination of Bessel functions:
\begin{equation}
u(r)=ArJ_l(kr)+BrN_l(kr).
\end{equation}
We rewrite it with the spherical Hankel function (like $$e^{ikr}$$ and $$e^{-ikr}$$):
\begin{equation}
H_l^{(1)}(x)=J_l(x)+iN_l(x)
\end{equation}
\begin{equation}
H_l^{(2)}(x)=J_l(x)-iN_l(x)
\end{equation}
For the same reason, we choose the first Hankel function $$H_l^{(1)} \to e^{ikr}/r$$ for large $$r$$.
Thus, outside the scattering region ($$V(r)=0$$), the wave function is:
\begin{equation}
\psi(r,\theta,\phi) = A\lbrace e^{ikz}+\sum_{l,m} c_{l,m} H_l^{(1)}(kr) Y_l^m(\theta,\phi)\rbrace
\end{equation}
Because we assume the potential has spherical symmetry, only $$m=0$$ term exists. So:
\begin{equation}
\psi(r,\theta) = A\lbrace e^{ikz}+ k\sum_{l=0}^{\infty} i^{l+1}(2l+1)a_l H_l^{(1)}(kr) P_l(\cos\theta)\rbrace
\end{equation}
where $$a_l$$ is called the $$l$$th sub-wave amplitude.
Thus, for large $$r$$,
\begin{equation}
\label{11.25}
f(\theta) = \sum_{l=0}^{\infty}(2l+1)a_l P_l(\cos\theta)
\end{equation}
And the total cross section:
\begin{equation}
\sigma = 4\pi\sum_{l=0}^{\infty} (2l+1)|a_l|^2
\end{equation}



