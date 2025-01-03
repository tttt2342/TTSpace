---
layout: post
title: Adiabatic Approximation
date: 2025-01-01 12:12:00+0800
description: Quantum Mechanics Notes 
tags: 
categories: QuantumMechanics
related_posts: false
---

### Adiabatic Theorem
#### Adiabatic Process
The aidbatic process is defined as that with external condition changing slowly. 
There are two characteristic times: $$T_i$$ is the "internal" time, representing the motion of system itself (such as the period of a single pendulum); $$T_e$$ is the external time, representing the time needed for system parameters to change significantly (such as the motion of the fixed point of a pendulum).
Adiabatic process requires $$T_e >> T_i$$

The basic method to anylyze an adiabatic process is condidering external parameters as constant, only variable at the last of calculation. 
It can be expressed as the adiabatictheorem below.\
Assume Hamiltonian change from initial value $$H^i$$ to $$H^f$$ slowly. If a particle under the $$n$$ order eigen state of $$H^i$$, it will evolve to the $$n$$ order eigen state of $$H^f$$ (following Schrodinger Equation).

#### Proof of Adiabatic Process
We know the solution to TDSE under time-independent Hamiltonian is
\begin{equation}
\label{10.12}
\Psi(t) = \sum_n c_n(t)\psi_n(t)e^{i\theta_n(t)}
\end{equation}
where
\begin{equation}
\theta_n(t) = -\frac{1}{\hbar}\int_0^t E_n(t')dt'.
\end{equation}
Substitute equation\eqref{10.12} into TDSE, we obtain
\begin{equation}
\sum_n \dot c_n \psi_n e^{i\theta_n} = -\sum_n c_n \dot\psi_n e^{i\theta_n}
\end{equation}
Take the inner product with $$\psi_m$$,
\begin{equation}
\sum_n \dot c_n \delta_{mn} e^{i\theta_n} = -\sum_n c_n\langle \psi_m | \dot\psi_n \rangle e^{i\theta_n} 
\end{equation}
That is
\begin{equation}
\label{10.16}
\dot c_m(t) = -\sum_n c_n \langle \psi_m |\dot\psi_n \rangle e^{i(\theta_n- \theta_m)}.
\end{equation}
Now take the differential of the eigen equation of $$H$$:
\begin{equation}
\dot H \psi_n+H_n \dot\psi_n=\dot E_n \psi_n +E_n \dot\psi_n
\end{equation}
Take the inner product with $$\psi_m$$ again and use the Hermitian of $$H$$:
\begin{equation}
\langle \psi_m |\dot H |\psi_n\rangle = (E_n-E_m)\langle\psi_m | \dot\psi_n\rangle
\end{equation}
Substitute this equation into eqref{10.16}, and do the adiabatic approximation ($$\dot H $$ is very small) to ignore the second term, we can obatin:
\begin{equation}
\dot c_m(t) = -c_m \langle\psi_m |\dot\psi_m,
\end{equation}
with the solution
\begin{equation}
c_m(t) = c_m(0) e^{i\gamma_m (t)}
\end{equation}
where $$\gamma_m(t) = i\int_0^t \langle \psi_m(t') | \frac{\partial}{\partial t'}\psi_m(t') \rangle dt'$$.
Specially, if the particle is under the $$n$$th eigen state ($$c_n(0)=1$$), then
\begin{equation}
\label{psi}
\Psi_n(t)=e^{i\theta_n(t) t} e^{i\gamma_n(t)} \psi_n(t)
\end{equation}
Thus it is still under the $$n$$th eigen state, with a phase factor added. (QED) 
### Berry Phase
#### Uncomplete System
For a system that moves (or some parameters vary) along a closed curve but does not go back to the initial state, we call it an uncomplete system.
#### Geometric Phase
In equation\eqref{psi}, 
\begin{equation}
\theta_n(t) = -\frac{1}{\hbar}\int_0^t E_n(t')dt'
\end{equation}
is the dynamic phase, while
\begin{equation}
\gamma_n(t) = i\int_0^t \langle \psi_n(t') |\frac{\partial}{\partial t'}\psi_n(t')\rangle dt'
\end{equation}
is called **geometric phase**.
If there are $$N$$ parameters varying: $$R_1(t), R_2(t), \cdots$$; in this case,
\begin{equation}
\frac{\partial \psi_n}{\partial t} = \sum_n \frac{\partial\psi_n}{\partial R_n} \frac{dR_n}{dt}=(\nabla_R \psi_n)\cdot \frac{d\vec R}{dt},
\end{equation}
where $$\vec R = (R_1,R_2,...,R_N)$$. Now we have
\begin{equation}
\gamma_n(t) = i\int_{\vec R_i}^{\vec R_f} \langle \psi_n | \nabla_R \psi_n\rangle \cdot d\vec R,
\end{equation}
If the Hamiltonian return to the initial form, then the final geometric phase is
\begin{equation}
\label{10.45}
\gamma_n(T)=i \oint \langle \psi_n |\nabla_R \psi_n\rangle \cdot d\vec R
\end{equation}which is a closed integral in parameter space normally non-zero. $$\gamma_n(T)$$ is called the **Berry phase**, and it only depends on the path.
In three dimension parameter space, we can write equation\eqref{10.45} into a surface integral:
\begin{equation}
\gamma_n(T) = i\int [\nabla_R \times \langle\psi_n |\nabla_R \psi_n\rangle ] \cdot d\vec a.
\end{equation}

#### Aharonov-Bohm Effect (AB Effect)

