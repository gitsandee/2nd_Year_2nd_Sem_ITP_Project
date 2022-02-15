import React from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function Footer(){

    return(

        <footer class="pt-4 pb-4 text-center bg-light">

  <div className="container">

    <div className="my-3">

      <div className="h4">DoughLands Cakes</div>

      <p>Pilana, Karapitiya, Sri Lanka</p>

      <div className="social-nav">

        <nav role="navigation">

          <ul className="nav justify-content-center">

            <li className="nav-item"><a className="nav-link" href="https://twitter.com/templateflip" title="Twitter"><i class="fab fa-twitter"></i><span class="menu-title sr-only">Twitter</span></a></li>

            <li className="nav-item"><a className="nav-link" href="https://www.facebook.com/templateflip" title="Facebook"><i class="fab fa-facebook"></i><span class="menu-title sr-only">Facebook</span></a></li>

            <li className="nav-item"><a className="nav-link" href="https://www.instagram.com/templateflip" title="Instagram"><i class="fab fa-instagram"></i><span class="menu-title sr-only">Instagram</span></a></li>

            <li className="nav-item"><a className="nav-link" href="https://www.linkedin.com/" title="LinkedIn"><i class="fab fa-linkedin"></i><span class="menu-title sr-only">LinkedIn</span></a></li>

            <li className="nav-item"><a className="nav-link" href="https://www.behance.net/templateflip" title="Behance"><i class="fab fa-behance"></i><span class="menu-title sr-only">Behance</span></a></li>

          </ul>

        </nav>

      </div>

    </div>

    <div class="text-small text-secondary">

      <div class="mb-1">&copy; DoughLands. All rights reserved.</div>

      <div>

        <a></a></div>

    </div>

  </div>

</footer>

);

}