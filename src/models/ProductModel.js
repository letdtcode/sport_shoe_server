import mongoose from "mongoose";

const reviewsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true,
      default: 0
    },
    comment: {
      type: String,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

const sizeSchema = mongoose.Schema(
  {
    size: {
      type: Number,
      required: true
    },
    countInStock: {
      type: Number,
      require: true,
      default: 0
    }
  }
);

const colorSchema = mongoose.Schema(
  {
    color: {
      type: String,
      required: true
    },
    sizes: [sizeSchema]
  }
);

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    image: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String,
      required: true
    },
    reviews: [reviewsSchema],
    rating: {
      type: Number,
      required: true,
      default: 0
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0
    },
    price: {
      type: Number,
      required: true,
      default: 0
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0
    },
    category: {
      type: String,
      required: true
    },
    colors: [colorSchema]
  },
  {
    collection: "products",
    timestamps: true
  }
);

const product = mongoose.model("Product", productSchema);
export default product;
