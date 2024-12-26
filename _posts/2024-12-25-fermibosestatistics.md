---
layout: post
title: Fermi and Bose Statistics
date: 2024-12-25 15:12:00+0800
description: Statistical Mechanics Notes 
tags: StatisticalMechanics
related_posts: false
---

### Fermi Statistics
For fermions, each single-particle state can accommodate at most one particle, and thus each state is either occupied or empty. To place $$n_j$$ fermions into $$g_j$$ states, the number of ways:
\begin{equation}
w_j=\frac{g_j!}{n_j!(g_j-n_j)!}
\end{equation}
Therefore, under a certain seqence of occupation numbers$$\lbrace n_i\rbrace$$, we have the microstate number
\begin{equation}
\Omega\lbrace n_i\rbrace = \prod_{j}\frac{g_j!}{n_j(g_j-n_j)!}
\end{equation}
Using Lagrage multipliers, we can obtain
\begin{equation}
\bar n_j = \frac{g_j}{e^{-\alpha+\beta\epsilon_j}+1}
\end{equation}
This is the Fermi distribution.

### Bose Statistics
For Bosons
\begin{equation}
w_j=\frac{(g_j+n_j-1)!}{n_j!(g_j-1)!}
\end{equation}
Therefore, the number of microstates:
\begin{equation}
\Omega\lbrace n_i\rbrace = \prod_{j}\frac{(n_j+g_j-1)!}{n_j(g_j-1)!}
\end{equation}
Using Lagrage multipliers, we can obtain
\begin{equation}
\bar n_j = \frac{g_j}{e^{-\alpha+\beta\epsilon_j}-1}
\end{equation}
This is the Bose distribution.

### Physical Quantities under Quantum Statistics
##### Pressure
The pressure of the quantum ideal gas can be calculated using the particle flux impinging on a wall arising from a momentum distribution $$f(\vec p)$$:
\begin{equation}
P=m\int d^3 p v_x^2 f(\vec p)
\end{equation}
Using $$f(\vec p) = h^{-3} n_p$$, and $$v_x^2=\frac{1}{3} {\vec v}^2$$, we can obtain
\begin{equation}
\frac{P}{k_B T}=\frac{1}{\lambda^3}\frac{8}{3\sqrt{\pi}}\int_{0}^{\inf} \frac{x^4}{z^{-1}e^{x^2} -\zeta}
\end{equation}
where $$z = e^\alpha = e^{\beta \mu}$$ is called the **fugacity**.We can get the relation:
\begin{equation}
PV=\frac{2}{3}U
\end{equation}
This holds for the ideal Fermi and Bose gas, as well as the classical ideal gas.

##### Entropy
From the definition of entropy we can obtain
\begin{equation}
\frac{S}{k_B} = \sum_{k} [\frac{1}{\xi \pm 1} \ln (\xi \pm 1) \pm \frac{\xi}{\xi\pm 1}\ln\frac{\xi \pm 1}{\xi}]
\end{equation}
where $$\xi = z^{-1} e^{-\beta\epsilon}$$. Using the definition of $$U$$ and $$N$$, we have
\begin{equation}
\frac{S}{k_B}=-N\ln z + \frac{U}{k_B T} \pm \sum_{k}\ln (1\pm z e^{-\beta \epsilon})
\end{equation}
with + for Fermi, and - for Bose.

In the thermodynamic limit the last term becomes an integral, so we can calculate(for Fermi):
\begin{equation}
\frac{V}{2\pi^2}\int_0^{\inf}k^2 \ln (1 + z e^{-\beta\epsilon})=\frac{2}{3}\frac{U}{k_B T}=\frac{PV}{k_B T}
\end{equation}
The same final result holds for the Bose case. Now we have the relation
\begin{equation}
S = \frac{1}{T} (U+PV-N\mu)
\end{equation}
This verifies the thermodynamics relation $$T^{-1} = \partial S/\partial U$$.
##### Free Energy
We can identify the free energy as
\begin{equation}
A = N\mu - PV
\end{equation}
From previouse formula we can obtain
\begin{equation}
A = k_B T \ln z \mp k_B T \sum_{k}\ln (1 \pm ze^{-\beta\epsilon})
\end{equation}
where + for Fermi, and - for Bose.
##### Equation of State
