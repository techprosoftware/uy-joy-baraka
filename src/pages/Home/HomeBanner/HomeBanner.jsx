/* eslint-disable no-unused-vars */
import React from 'react';
import buttonPhone from '../../../../public/assets/images/home-phone.svg'
import './HomeBanner.scss';

export const HomeBanner = () => {
	return (
		<>
			{' '}
			<div id='carouselExampleIndicators' className='carousel slide'>
				<div className='carousel-indicators'>
					<button
						type='button'
						data-bs-target='#carouselExampleIndicators'
						data-bs-slide-to={0}
						className='active'
						aria-current='true'
						aria-label='Slide 1'
					/>
					<button
						type='button'
						data-bs-target='#carouselExampleIndicators'
						data-bs-slide-to={1}
						aria-label='Slide 2'
					/>
					<button
						type='button'
						data-bs-target='#carouselExampleIndicators'
						data-bs-slide-to={2}
						aria-label='Slide 3'
					/>
                    <button
						type='button'
						data-bs-target='#carouselExampleIndicators'
						data-bs-slide-to={3}
						aria-label='Slide 4'
					/>
				</div>
				<div className='carousel-inner'>
					<div className='carousel-item active'>
						<div className='home-banner'>
							<div className='container'>
								<div className='home-banner-wrap'>
									<div className='banner-wrapper'>
                  <h1 className='banner-title'>Uy-joy e’lonlaringizni bizning saytga joylashtiring</h1>
										
                  <button className='banner-btn' href='#'>
                   <img src={buttonPhone} alt="buton-phone" /> Biz bilan bog’lanish
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='carousel-item'>
						<div className='home-banner'>
							<div className='container'>
								<div className='home-banner-wrap'>
									<div className='banner-wrapper'>
                  <h1 className='banner-title'>Uy-joy e’lonlaringizni bizning saytga joylashtiring</h1>
										
										<button className='banner-btn' href='#'>
                    <img src={buttonPhone} alt="buton-phone" /> Biz bilan bog’lanish
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='carousel-item'>
						<div className='home-banner'>
							<div className='container'>
								<div className='home-banner-wrap'>
									<div className='banner-wrapper'>
                  <h1 className='banner-title'>Uy-joy e’lonlaringizni bizning saytga joylashtiring</h1>
										
										<button className='banner-btn' href='#'>
                    <img src={buttonPhone} alt="buton-phone" /> Biz bilan bog’lanish
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
                    <div className='carousel-item'>
						<div className='home-banner'>
							<div className='container'>
								<div className='home-banner-wrap'>
									<div className='banner-wrapper'>
										<h1 className='banner-title'>Uy-joy e’lonlaringizni bizning saytga joylashtiring</h1>
										
										<button className='banner-btn' href='#'>
                    <img src={buttonPhone} alt="buton-phone" /> Biz bilan bog’lanish
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			
			</div>
		</>

		
	);
};