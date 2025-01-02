---
layout: post
title: Time Perturbation Theory
date: 2024-12-31 12:12:00+0800
description: Quantum Mechanics Notes 
tags: 
categories: QuantumMechanics
related_posts: false
---

##### TDSE
If the transitions between different energy levels are allowed, we must use time-dependent wave function. Thus the TDSE
\begin{equation}
H\Psi = i\hbar\frac{\partial \Psi}{\partial t}
\end{equation}
can not be solved by variable seperation. But if the time-dependent part of Hamiltonian is small, we can consider is as perturbation.
### Two Energy-level System
We start with the Hamiltonian that have only two eigen states:
\begin{equation}
H^0 \psi_a=E_a\psi_a
\end{equation}
\begin{equation}
H^0 \psi_b=E_b \psi_b
\end{equation}
which are orthornormalized $$\langle \psi_a | \psi_b\rangle = \delta_{ab}$$.
Thus any state at any time can be expressed as:
\begin{equation}
\label{Psi}
\Psi(t)=c_a\psi_a e^{-iE_a t/\hbar}+c_b\psi_b e^{-iE_b t/\hbar}
\end{equation}
where $$c_a$$ and $$c_b$$ are the initial constant.
#### Add Perturbation
If we add a time-dependent Hamiltonian pertrbation $$H'(t)$$, now $$c_a$$ and $$c_b$$ would become time-dependent.
Assuming that $$c_a(0) = 1$$ as initial condition, as $$\Psi(t)$$ obeys  the TDSE, we can solve the constant into:
\begin{equation}
\label{9.13}
\dot{c_a}=-\frac{i}{\hbar}H'_{ab} e^{-i\omega_0 t}c_b
\end{equation}

\begin{equation}
\dot{c_b}=-\frac{i}{\hbar}H'_{ba} e^{i\omega_0 t}c_a
\end{equation}

where $$\omega_0 = \frac{E_b - E_a}{\hbar}$$ and $$H'_{ab} = \langle \psi_a |H'|\psi_b\rangle$$
#### Time-Dependent Perturbation Theory
We can solve the equations by iteration, substituting the right hand of \eqref{9.13} with the lower order approximation value. Assume $$c_a(0)=1$$.
##### 0th Order
\begin{equation}
c_a^{(0)}(t) = 1
\end{equation}

\begin{equation}
c_b^{(0)}(t) = 0
\end{equation}
##### 1st Order
\begin{equation}
c_a^{(1)}(t)=1
\end{equation}
\begin{equation}
\dot{c_b^{(1)}}(t)=-\frac{i}{\hbar}H'_{ba} e^{i\omega_0 t} \to c_b^{(1)}(t)=-\frac{i}{\hbar}\int_{0}^{t}H'_{ba}(t')e^{i\omega_0 t'}dt'
\end{equation}
##### 2nd Order
\begin{equation}
c_a^{(2)}(t)=1-\frac{1}{\hbar^2}\int_0^t H'_{ab}(t')e^{-i\omega_0 t'}[\int_0^{t'}H'_{ba}(t")e^{i\omega_0 t"}dt"]dt'
\end{equation}
\begin{equation}
c_b^{(2)}(t)=c_b^{(1)}(t)
\end{equation}
