
import reviewModel from "../Model/reviewModel.js";
import fs from 'fs'
export const reviewController=async(req,res)=>{
         
  try {
    const { name, description,destination} =req.fields;

    const { photo } = req.files;
   
    
    //validation
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is Required" });
      case !destination:
        return res.status(500).send({ error: "Destination is Required" });
      case !description:
        return res.status(500).send({ error: "Description is Required" });
      
      case photo && photo.size > 5000000:
        return res
          .status(500)
          .send({ error: "photo is Required and should be less then 1mb" });
    }
    const review = new reviewSchema({ name, description,destination});

    if (photo) {
   
      review.photo.data = fs.readFileSync(photo.path);
 
      review.photo.contentType = photo.type;
    }
    await review.save();
    res.status(201).send({
      success: true,
      message: "Review Created Successfully",
      review,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in creating review",
    });
  }

}







// export const getReview=async(req,res)=>{

//   try {
//     const review = await reviewModel
//       .find({})
      
      
      
//       .sort({ createdAt: -1 });
//     res.status(200).send({
//       success: true,
      
//       message: "ALl Review ",
//       review,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: "Erorr in getting Review",
//       error: error.message,
//     });
//   }
// }


export const getReview = async (req, res) => {
  try {
    const reviews = await reviewModel.find({}).sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      message: "All Reviews",
      reviews: reviews.map((review) => ({
        ...review._doc,
        photo: review.photo && review.photo.data
          ? `data:${review.photo.contentType};base64,${review.photo.data.toString('base64')}`
          : null,
      })),
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting reviews",
      error: error.message,
    });
  }
};
