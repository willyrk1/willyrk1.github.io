import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import {PROTOCOL, HOSTNAME} from '../../config/StFrancisRescue'
import { usePetData } from '../../context/PetDataContext'
import styles from './FeaturedPets.module.scss'

const cx = classNames.bind(styles)

const FeaturedPets = () => {
  const petData = usePetData()
  const pets = petData && petData.cats.fosteredAnimals.concat(petData.dogs.fosteredAnimals)
  const pet = pets && pets[Math.floor(Math.random() * pets.length)]

  const {
    public_filename: petImage,
  } = (pet && pet.images && pet.images.find(({ primary }) => primary)) || {}

  return (
    <div className={cx('featured-pets')}>
      <h1>Featured Pet</h1>
      <hr/>
      {pet &&
        <>
          <div className={cx('pet-outer')}>
            <div className={cx('pet-image')}>
              <h2>{pet.name}</h2>
              {petImage
                ? <img src={`${PROTOCOL}://${HOSTNAME}${petImage}`} alt={pet.name} />
                : <img src="https://stopfordcats.org.uk/wordpress/wp-content/uploads/2018/05/Coming-Soon.jpg" />
              }
            </div>
            <div className={cx('pet-info')}>
              <ul>
                <li>
                  <label htmlFor='breed'>Breed</label>
                  <span id='breed'>{pet.dominant_breed.name}</span>
                </li>
                <li>
                  <label htmlFor='gender'>Gender</label>
                  <span id='gender'>{pet.sex}</span>
                </li>
                <li>
                  <label htmlFor='color'>Color</label>
                  <span id='color'>{pet.animal_color.name}</span>
                </li>
                <li>
                  <label htmlFor='dob'>Date of birth</label>
                  <span id='dob'>{pet.date_of_birth}</span>
                </li>
                <li>
                  <label htmlFor='goodWithCats'>Good with cats</label>
                  <span id='goodWithCats'>{pet.good_with_cats}</span>
                </li>
                <li>
                  <label htmlFor='goodWithDogs'>Good with dogs</label>
                  <span id='goodWithDogs'>{pet.good_with_dogs}</span>
                </li>
                <li>
                  <label htmlFor='goodWithChildren'>Good with children</label>
                  <span id='goodWithChildren'>{pet.good_with_children}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={cx("view-buttons")}>
            <Link to='/cats' className={cx('btn')}>View All Cats</Link>
            <Link to='/dogs' className={cx('btn')}>View All Dogs</Link>
          </div>
        </>
      }
    </div>
  )
}

export default FeaturedPets