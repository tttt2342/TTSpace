---
layout: post
title: Quantum Ensembles
date: 2024-12-25 11:12:00-0400
description: Statistical Mechanics Notes 
tags: StatisticalMechanics
related_posts: false
---

### Statistical Calculator
Definition of statistical calculator $$\rho$$:

\begin{equation}
\hat\rho = \sum_{i} |\psi_i\rangle P_i \langle \psi_i| , (\sum_{i} P_i = 1)
\end{equation}

Especially, for pure states:
\begin{equation}
\hat\rho = |\psi_i\rangle\langle\psi_i|
\end{equation}

The statistical calculator has following properties:
1. The trace of statistical calculator $$\hat\rho$$ equals to 1. i.e.
\begin{equation}
tr\hat\rho = \sum_{n}\rho_{nn} = \sum_{n}\langle\phi_n|\hat\rho|\phi_n\rangle=\sum_{i}\langle\psi_i|\sum_{n}|\phi_n\rangle\langle\phi_n|\psi_i\rangle P_i=\sum_{i}P_i=1
\end{equation}
2. The trace of the square of $$\hat\rho$$:

\begin{equation}
  tr\hat\rho^2<1 \text{, for mixed ensembles} <br>
  tr\hat\rho^2=1 \text{, for pure ensembles} 
\end{equation}

3. The statistical calculator is Hermitian calculator, thus its eigen value must be real.

### Liouville's Theorem
In classical statistical mechanics, we have Liouville's theorm, which claims that a conserved mechanics system with $$N$$ particles in $$\Gamma$$ space, its state density $$D(p,q,t)$$ is conserved while moving. The math expression of this theorem is
\begin{equation}
\label{LT}
\frac{dD(p,q,t)}{dt}=\frac{\partial D(p,q,t)}{\partial t}+\lbrace D,H\rbrace=0
\end{equation}
And the poisson bracket is
\begin{equation}
\lbrace D,H\rbrace = \sum_{i=1}^s (\frac{\partial D}{\partial q_i}\frac{\partial H}{\partial p_i}-\frac{\partial D}{\partial p_i}\frac{\partial H}{\partial q_i})
\end{equation}
When the system is under statistical equilibrium, the state density would be independent of time. Thus from \eqref{LT} we have 
\begin{equation}
\lbrace D,H\rbrace = 0
\end{equation}

If we want to find out the quantum version Liouville's Theorem, we can write statistical calculator under Schrodinger frame
\begin{equation}
\hat\rho(t) = \sum_{i} |\psi_i(t)\rangle P_i\langle\psi_i(t)|
\end{equation}
From the Schrodinger equation that is followed by $$|\psi_i(t)>$$, we can derive the quantum Liouville's theorem with similiar method:
\begin{equation}
[\hat H, \hat\rho]=0
\end{equation}
This illustrates that $$\hat\rho$$ and $$\hat H$$ are commutated, thus statistical calculator is a motion integral.

## Quantum Ensemble Theory

### Microcanonical Ensemble
**Definition:** An isolated system without energy and particle exchange with external environment. As there is no system does not exchange energy completely, we define such systems as those with little energy change from $$E$$ to $$E+\Delta E$$.

We have two basic assumption in statistical physics:
  1. The system can be located on every microstate in the energy shell.
  2. Those probabilities on each states are equal.

#### Statistical Calculator of Microcanonical Ensemble
On those assumption we can write the matrix elements of $$\hat\rho$$ (Density matrix):
\begin{equation}
\rho_{nm} = P_n \delta_{nm}
\end{equation}
$$P_n$$ is the probability that eigen vector $$|\Phi_n\rangle$$ appears. As probabilities are equal, we have
\begin{equation}
P_n=
\begin{cases}
  \frac{1}{\Omega(E)},& E<E_n<E+\Delta E \\
  0,& \text{otherwise}
\end{cases}
\end{equation}
$$E_n$$ is the eigen energy of system.
