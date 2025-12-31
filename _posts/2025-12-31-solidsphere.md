---
layout: post
title: Viscous Flow Past a Solid Sphere
date: 2025-12-31 10:00:00+0800
description: Solve the flow past a sphere using Stokes stream function
tags: fluid stokes
categories: FluidMechanics
related_posts: false
---
## Stokes Equation
斯托克斯方程（Stokes Equation）是完整的纳维-斯托克斯方程在低雷诺数（$$\text{Re} << 1$$）下的近似形式, 此时惯性力$$\rho\frac{D\vec{u}}{Dt}$$远小于粘性力$$\mu\nabla^2\vec{u}$$， 同时考虑不可压缩流流动。
斯托克斯方程以及连续性方程如下：
\begin{equation}
\nabla p = \mu\nabla^2 \vec{u}
\end{equation}
\begin{equation}
\nabla \dot \vec{u} = 0
\end{equation}

## Stokes Stream Function
由于此问题中的流动是轴对称的，与方位角$$\phi$$无关，所以我们引入斯托克斯流函数来简化问题：
\begin{equation}
u_r = \frac{1}{r^2\sin(\theta)}\frac{\partial\Psi}{\partial \theta}
\end{equation}
\begin{equation}
u_\theta = -\frac{1}{r\sin(\theta)}\frac{\partial\Psi}{\partial r}
\end{equation}
流函数自动满足连续性方程。