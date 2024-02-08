import React, { useEffect, useState } from 'react'
import RatingStars from '../../common/RatingStars'
import GetAvgRating from '../../../utils/avgRating';
import { Link, useParams } from 'react-router-dom';

const Course_Card = ({course, Height}) => {
    const [avgReviewCount, setAvgReviewCount] = useState(0);
// console.log("bhai course ki info hi ",course);
    useEffect(()=> {
        const count = GetAvgRating(course.ratingAndReviews);
        setAvgReviewCount(count);
    },[course])
    // console.log("image",course?.thumbnail);
    // console.log("name",course?.courseName);


    
  return (
    <div>
        <Link to={`/courses/${course._id}`}>
            <div>
                <div className="rounded-lg">
                    <img 
                        src={course?.thumbnail}
                        alt='course ka thumbnail'
                        className={`${Height} w-full rounded-xl object-cover`}
                    />
                </div>
                <div className="flex flex-col gap-2 px-1 py-3">
                    <p className="text-2xl text-richblack-5">{course?.courseName}</p>
                    <p className=" text-richblack-50 text-2xl">{course?.instructor?.firstName} {course?.instructor?.lastName} </p>
                    <div className="flex items-center gap-2">
                        <span className="text-richblack-400">{avgReviewCount || 0}</span>
                        <RatingStars Review_Count={avgReviewCount} />
                        <span>{course?.ratingAndReviews?.length} Ratings</span>
                    </div>
                    <p className="text-xl text-richblack-5"> Rs. {course?.price}</p>
                </div>
            </div>
        </Link>

      
    </div>
  )
}

export default Course_Card
