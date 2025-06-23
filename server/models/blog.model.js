const mongoose = require('mongoose');

const ContentBlockSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ['heading', 'subheading', 'paragraph', 'image', 'code', 'link', 'list'],
      required: true,
    },
    level: {
      type: Number,
      required: function () {
        return this.type === 'heading' || this.type === 'subheading';
      },
    },
    text: {
      type: String,
      required: function () {
        return ['heading', 'subheading', 'paragraph', 'link'].includes(this.type);
      },
    },
    href: {
      type: String,
      required: function () {
        return this.type === 'link';
      },
    },
    src: {
      type: String,
      required: function () {
        return this.type === 'image';
      },
    },
    alt: {
      type: String,
      default: '',
    },
    language: {
      type: String,
      default: 'text',
    },
    code: {
      type: String,
      required: function () {
        return this.type === 'code';
      },
    },
    items: {
      type: [String],
      required: function () {
        return this.type === 'list';
      },
    },
    ordered: {
      type: Boolean,
      default: false,
    },
  },
  { _id: false }
);


const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      enum: ['cloud', 'aiml', 'dbms', 'os'],
      required: true,
    },
    content: {
      type: [ContentBlockSchema],
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Blog', BlogSchema);