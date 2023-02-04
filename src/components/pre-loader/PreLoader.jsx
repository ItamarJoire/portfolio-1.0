import { useState, useEffect } from "react"
import { Box } from "@mui/material"

export function PreLoader() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <>
      {loading &&
        <Box
          className="loader-bg">

          <svg width="74" height="80" viewBox="0 0 74 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="logo-i">
              <g id="background">
                <mask id="path-1-inside-1_886_124" fill="white">
                  <rect x="0.428589" width="73.5714" height="79.2308" rx="1" />
                </mask>
                <rect x="0.428589" width="73.5714" height="79.2308" rx="1" stroke="url(#paint0_linear_886_124)" stroke-width="4" stroke-linejoin="round" mask="url(#path-1-inside-1_886_124)" />
              </g>
              <g id="logo">
                <path id="icon-i" d="M39.5756 26.2759H34V62.5176C36.5976 60.2811 39.4979 57.7095 39.5756 53.9007C39.6534 50.0919 39.5756 26.2759 39.5756 26.2759Z" fill="url(#paint1_linear_886_124)" stroke="url(#paint2_linear_886_124)" stroke-width="2" stroke-linejoin="round" />
                <path id="icon-pingo-i" d="M39.5756 22.5756H34V17H39.5756V22.5756Z" fill="url(#paint3_linear_886_124)" stroke="url(#paint4_linear_886_124)" stroke-width="2" stroke-linejoin="round" />
              </g>
            </g>
            <defs>
              <linearGradient id="paint0_linear_886_124" x1="37.2143" y1="0" x2="37.2143" y2="79.2308" gradientUnits="userSpaceOnUse">
                <stop stop-color="#7A72AD" />
                <stop offset="1" stop-color="#51459E" />
              </linearGradient>
              <linearGradient id="paint1_linear_886_124" x1="36.8051" y1="26.2759" x2="36.8051" y2="62.5176" gradientUnits="userSpaceOnUse">
                <stop stop-color="#7A72AD" />
                <stop offset="1" stop-color="#51459E" />
              </linearGradient>
              <linearGradient id="paint2_linear_886_124" x1="36.8051" y1="26.2759" x2="36.8051" y2="62.5176" gradientUnits="userSpaceOnUse">
                <stop stop-color="#7A72AD" />
                <stop offset="1" stop-color="#51459E" />
              </linearGradient>
              <linearGradient id="paint3_linear_886_124" x1="36.7878" y1="17" x2="36.7878" y2="22.5756" gradientUnits="userSpaceOnUse">
                <stop stop-color="#7A72AD" />
                <stop offset="1" stop-color="#51459E" />
              </linearGradient>
              <linearGradient id="paint4_linear_886_124" x1="36.7878" y1="17" x2="36.7878" y2="22.5756" gradientUnits="userSpaceOnUse">
                <stop stop-color="#7A72AD" />
                <stop offset="1" stop-color="#51459E" />
              </linearGradient>
            </defs>
          </svg>

        </Box>
      }
    </>
  )
}