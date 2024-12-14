import subscribeModel from "../Model/subscribeModel.js";

export const addSubscribers = async (req, res) => {
  try {
    let { subscriber } = req.body;
    if (!subscriber) {
      return res.send({ message: "Subscriber is Required" });
    }

    const subs = await new subscribeModel({
      subscriber,
    }).save();

    res.status(201).send({
      sucess: true,
      message: "Submited Sucessfully",
      subs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "Error in subscriber",
      error,
    });
  }
};

export const getSubscriber = async (req, res) => {
  try {
    let subs = await subscribeModel.find({});

    res.status(200).send({
      success: true,

      message: "ALl subs",
      subs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr in getting Subscriber",
      error: error.message,
    });
  }
};
