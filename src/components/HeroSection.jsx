import './HeroSection.css'


function HeroSection() {


    return (
        <div className="container">
        <div className="container-body">
            {/* <!-- The left side of the container --> */}
            <div className="sign-in-body">
                <div className="intro-text">
                    <h1>You Name It, We Got It! Stream Movies To Your Liking.</h1>
                    <h3>More than 30,000 users have enjoyed our streaming services. Try now and begin you
                        experience!</h3>
                </div>
                {/* <!-- The boxes on the bottom of the left side of the container --> */}
                <div className="log-or-register">
                    <div className="log-box">
                        <h4>Log In!</h4>
                        <div className="field">
                            <svg className="input-icon" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M207.8 20.73c-93.45 18.32-168.7 93.66-187 187.1c-27.64 140.9 68.65 266.2 199.1 285.1c19.01 2.888 36.17-12.26 36.17-31.49l.0001-.6631c0-15.74-11.44-28.88-26.84-31.24c-84.35-12.98-149.2-86.13-149.2-174.2c0-102.9 88.61-185.5 193.4-175.4c91.54 8.869 158.6 91.25 158.6 183.2l0 16.16c0 22.09-17.94 40.05-40 40.05s-40.01-17.96-40.01-40.05v-120.1c0-8.847-7.161-16.02-16.01-16.02l-31.98 .0036c-7.299 0-13.2 4.992-15.12 11.68c-24.85-12.15-54.24-16.38-86.06-5.106c-38.75 13.73-68.12 48.91-73.72 89.64c-9.483 69.01 43.81 128 110.9 128c26.44 0 50.43-9.544 69.59-24.88c24 31.3 65.23 48.69 109.4 37.49C465.2 369.3 496 324.1 495.1 277.2V256.3C495.1 107.1 361.2-9.332 207.8 20.73zM239.1 304.3c-26.47 0-48-21.56-48-48.05s21.53-48.05 48-48.05s48 21.56 48 48.05S266.5 304.3 239.1 304.3z">
                                </path>
                            </svg>
                            <input autocomplete="off" id="logemail" placeholder="Email" className="input-field"
                                name="logemail" type="email"/>
                        </div>
                        <div className="field">
                            <svg className="input-icon" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z">
                                </path>
                            </svg>
                            <input autocomplete="off" id="logpass" placeholder="Password" className="input-field"
                                name="logpass" type="password"/>
                        </div>
                        <button className="btn" type="submit">Login</button>
                        {/* <!--href not there becuase there was no need for it --> */}
                        <a className="btn-link">Forgot your password?</a>
                    </div>
                    <div className="or-separate">
                        <h2>Or</h2>
                    </div>
                    {/* <!-- 2nd box --> */}
                    <div className="register-box">
                        <h4>Register!</h4>
                        <div className="field">
                            <svg className="input-icon" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M207.8 20.73c-93.45 18.32-168.7 93.66-187 187.1c-27.64 140.9 68.65 266.2 199.1 285.1c19.01 2.888 36.17-12.26 36.17-31.49l.0001-.6631c0-15.74-11.44-28.88-26.84-31.24c-84.35-12.98-149.2-86.13-149.2-174.2c0-102.9 88.61-185.5 193.4-175.4c91.54 8.869 158.6 91.25 158.6 183.2l0 16.16c0 22.09-17.94 40.05-40 40.05s-40.01-17.96-40.01-40.05v-120.1c0-8.847-7.161-16.02-16.01-16.02l-31.98 .0036c-7.299 0-13.2 4.992-15.12 11.68c-24.85-12.15-54.24-16.38-86.06-5.106c-38.75 13.73-68.12 48.91-73.72 89.64c-9.483 69.01 43.81 128 110.9 128c26.44 0 50.43-9.544 69.59-24.88c24 31.3 65.23 48.69 109.4 37.49C465.2 369.3 496 324.1 495.1 277.2V256.3C495.1 107.1 361.2-9.332 207.8 20.73zM239.1 304.3c-26.47 0-48-21.56-48-48.05s21.53-48.05 48-48.05s48 21.56 48 48.05S266.5 304.3 239.1 304.3z">
                                </path>
                            </svg>
                            <input autocomplete="off" id="logemail" placeholder="Email" className="input-field"
                                name="logemail" type="email"/>
                        </div>
                        <div className="field">
                            <svg className="input-icon" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z">
                                </path>
                            </svg>
                            <input autocomplete="off" placeholder="Password" className="input-field" type="password"/>
                        </div>
                        <div className="field">
                            <svg className="input-icon" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z">
                                </path>
                            </svg>
                            <input autocomplete="off" placeholder="Confirm Password" className="input-field"
                                type="password"/>
                        </div>
                        <button className="btn" type="submit">Login</button>
                        {/* <!-- href not included becuase there was no need for it --> */}
                        <a className="btn-link">Forgot your password?</a>
                    </div>
                </div>
            </div>
            {/* <!-- Right side of the container --> */}
            <div className="movie-image-container">
                <div className="gradient"></div>
                <img className="movie-image" src="spider-verse-1280a-1542009456969_160w.jpg" alt=""/>
                <img className="movie-title" src="Spider-Man-Into-The-Spider-Verse-Logo-PNG-Image.png" alt=""/>
                <div className="movie-info">
                    <h3>After being bitten by a radioactive spider, Brooklyn teen Miles Morales gets a crash course
                        in web-slinging from his alternate-dimension counterparts.</h3>
                </div>
                <button className="movie-button"><span className="movie-button-content">Watch Now</span></button>
            </div>
        </div>
        {/* ERROR */}
        </div>
    )
}

export default HeroSection;