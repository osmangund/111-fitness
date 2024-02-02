import PropTypes from "prop-types"
import { motion } from "framer-motion"

const cardAnimation = {
  hidden: { opacity: 0.025, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const Card = (props) => {
  const { src, children } = props
  return (
    <motion.div
      className="card"
      variants={cardAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="card__img">
        <img src={src} alt="" />
      </div>
      {children}
    </motion.div>
  )
}

Card.propTypes = {
  src: PropTypes.string,
  children: PropTypes.node,
}

export default Card
