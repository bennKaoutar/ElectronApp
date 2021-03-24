{
  "targets": [
    {
      "target_name": "addon",
      "sources": ["indecC++.cpp"],
      "include_dirs": ["<!(node -e \"require('nan')\")"]
    }
  ]
}